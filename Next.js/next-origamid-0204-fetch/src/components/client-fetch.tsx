'use client'

import React from 'react'

type Produto = {
  id: number
  nome: string
  descricao: string
}

export function ClientFetch() {
  const [data, setData] = React.useState<Produto[]>([])

  // Executamos o fetch dentro de um efeito(hook) para garantir que ele seja executado uma vez que o componente é montado no cliente.
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.origamid.online/produtos')

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = (await response.json()) as Produto[]
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <main>
      <h2>Client Fetch</h2>

      {/* 
          Diferente do ServerFetch, o ClientFetch faz a requisição no cliente, ou seja, quando o componente é montado no navegador. Isso significa que, ao entrar na página, o usuário verá um estado de carregamento ou loading ou algo em branco até que os dados sejam carregados e exibidos. Isso pode ser útil em casos onde os dados podem mudar com frequência ou onde você precisa de interatividade imediata com o usuário. Na segunda vez aparece mais rapido, pois o navegador já tem os dados em cache, mas mesmo assim você percebe a demora para apresentar os dados na tela.


          Se desativar o JS isso aqui não funciona

          Se o robo de SEO não usa JS ele não acha isso aqui, então não vai conseguir indexar esses dados, ou seja, o SEO não vai pegar esses dados. Por isso que é importante usar o ServerFetch quando você quer que os dados sejam indexados pelo SEO.
      */}
      <ul>
        {data.map((produto) => {
          return (
            <li key={produto.id}>
              <h2>{produto.nome}</h2>
              <p>{produto.descricao}</p>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
