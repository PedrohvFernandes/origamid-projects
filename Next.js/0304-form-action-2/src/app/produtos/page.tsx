export type PropsProduct = {
  id?: string
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: 0 | 1
}

export default async function ProdutosPage() {
  const response = await fetch('https://api.origamid.online/produtos', {
    cache: 'force-cache', // Forcei o cache. E eu revalido somente quando adiciono um novo produto.
    next: { revalidate: 60 }, // Revalido a cada 60 segundos. Mesmo que tenhamos revalidado quando adicionamos um novo produto, é necessario revalidar de tempos em tempos, pois outros pessoas podem ter adicionado novos produtos de outro lugar.
  })
  const produtos = (await response.json()) as PropsProduct[]

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>Preço: {produto.preco}</p>
            <p>Estoque: {produto.estoque}</p>
            <p>Importado: {produto.importado === 1 ? 'Sim' : 'Não'}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
