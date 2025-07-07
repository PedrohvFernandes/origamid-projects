// Mesmo que esse componente seja um client component, ele é pre renderizado no servidor, ou seja, o código é executado no servidor e o resultado é enviado para o cliente. Isso é útil para SEO e performance, pois o cliente recebe o HTML já renderizado. E se eu desabilitar o js no browser a página ainda vai funcionar, vai ser renderizado, diferente do React puro, que depende do js para funcionar(obs: mesmo renderizando o hooks e interações param de funcionar). Isso é chamado de Server Side Rendering (SSR).

// O componente é pre renderizado no servidor, mas não é hidratado, que é basicamente rodar o useEffect, useEstate, coisas de interatividade(onClick, onChange, etc) no cliente.

// Pontos positivos de usar server components:
// - Melhor performance, pois o servidor já envia o HTML renderizado para o cliente, reduzing the time to first paint (TTFP).
// - Melhor SEO, pois o HTML já está renderizado e os motores de busca conseguem index caso esse robô não use JS para ver o que foi pre renderizar no servidor.
// - Menor tamanho do bundle, pois o código é executado no servidor e não no cliente, reduzindo o tamanho do bundle enviado para o cliente.
// - Melhor experiência do usuário, pois o HTML já está renderizado e o cliente não precisa esperar o JavaScript ser carregado e executado para ver o conteúdo da página.

// No servidor eu não tenho acesso a api web: document, window, localStorage, sessionStorage, etc. Então se eu colocar um console.log(document) na função do componente, vai dar err(is not defined). Isso é porque o servidor não tem acesso ao DOM, ele só tem acesso ao HTML, CSS e JS que são enviados para o cliente, mesmo usando o 'use client', pois o componente é pre renderizado no servidor. Mas por que então o useEffect funciona? Porque o useEffect é executado no cliente, depois que o HTML já foi renderizado, e durante a pre renderização o useEffect não é ativado. Chamamos isso de "hidratação", que é quando o React "ativa" o HTML renderizado no servidor, permitindo que os hooks e interações funcionem no cliente. Então sempre usar API webs dentro de efeitos, pois eles são executados no cliente, depois que o HTML já foi renderizado, depois da hidratação.

/* 
Vai dar erro, pois o servidor não tem acesso ao DOM:
  console.log(document)
  const [width, setWidth] = React.useState(document.documentElement.clientWidth)
*/

'use client'

import React from 'react'

export function Width() {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    function handleResize() {
      // setWidth(window.innerWidth)
      setWidth(document.documentElement.clientWidth)
    }

    handleResize() // Set initial width
    // Adicionando o event listener para o resize da janela
    window.addEventListener('resize', handleResize)

    // Limpando o event listener quando o componente é desmontado
    // Isso é importante para evitar vazamentos de memória e garantir que o listener não seja chamado
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [ativo, setAtivo] = React.useState(false)

  return (
    <div>
      <p
        style={{
          color: ativo ? 'green' : 'red',
          fontSize: ativo ? '2rem' : '1rem',
          transition: 'all 0.3s ease-in-out',
          textAlign: 'center',
        }}
      >
        Essa é a largura da tela: {width}px
      </p>
      <button
        onClick={() =>
          // Eu tenho acesso ao valor do estado anterior(b)
          setAtivo((b) => !b)
        }
      >
        Ativar
      </button>
    </div>
  )
}
