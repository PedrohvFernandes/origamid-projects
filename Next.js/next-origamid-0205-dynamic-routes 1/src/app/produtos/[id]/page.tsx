// Capturamos o param "id" da URL e o utilizamos para buscar os dados do produto correspondente na API. A página exibe as informações do produto, como nome, preço, descrição, estoque e se é importado ou não.

type PageParams = {
  params: {
    id: string
  }
}

type Produto = {
  id: string
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: number
}

export default async function ProdutoPage({ params }: PageParams) {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  )

  const data = (await response.json()) as Produto

  return (
    <main>
      <h1>Produto</h1>
      <h2>{data.nome}</h2>
      <p>Preço: R$ {data.preco}</p>
      <p>Descrição: {data.descricao}</p>
      <p>Estoque: {data.estoque}</p>
      <p>Importado: {data.importado ? 'Sim' : 'Não'}</p>
      <p>ID: {data.id}</p>
    </main>
  )
}
