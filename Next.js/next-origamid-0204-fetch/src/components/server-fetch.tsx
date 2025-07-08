// Requisição feita no servidor

type Produto = {
  id: number
  nome: string
  descricao: string
}

export async function ServerFetch() {
  // Essa api fetch aqui é diferente da fetch normal, são parecidas, mas ela é estendida pelo uso do Next.js. Ou seja, o fetch do ClientFetch e do ServerFetch são diferentes. Esse fetch aqui é muito mais agressivo no cache, ou seja, ele vai tentar pegar os dados do cache do servidor antes de fazer uma nova requisição. Isso é bom para performance, pois evita requisições desnecessárias ao servidor. Então aqui seria necessario fazer um revalidate para garantir que os dados estão atualizados.
  const response = await fetch('https://api.origamid.online/produtos')

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = (await response.json()) as Produto[]
  console.log(data)
  return (
    <main>
      <h2>Server Fetch</h2>
      {/* 
        Quando a pessoa entrar não vai ficar esperando o carregamento dos
        dados, pois o Next.js já vai ter feito a requisição e retornado os dados
        para o componente no momento da pre-renderização. Ou seja, ele puxa
        primeiro os dados do servidor e depois renderiza o componente com os dados
        já prontos, mostrando instantaneamente a lista de produtos, sem mostrar um
        estado de carregamento ou loading. O que poderia acontecer era de demorar
        de entrar no site, mas depois que entrou, a lista de produtos já estaria
        pronta para ser exibida. 
      
        Se desativar o JS isso aqui funciona

        Se o robo de SEO não usa JS ele acha isso aqui, então  vai conseguir indexar esses dados, ou seja, o SEO vai pegar esses dados.
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
