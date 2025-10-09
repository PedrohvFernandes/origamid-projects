export type PropsProduct = {
  id?: string
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: 0 | 1
}

export default async function ProdutosLista({
  espera = 0,
}: {
  espera?: number
}) {
  let produtos: PropsProduct[] = []

  if (espera) await new Promise((resolve) => setTimeout(resolve, espera)) // Simulando um tempo de espera maior para carregar os produtos.

  // Essa maneira aqui de tratar o erro é mais simples, mas não aproveita o componente de error. Ele so quebra esse componente e todo o restante fica funcionando normalmente.
  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      cache: 'no-store',
      // next: { revalidate: 60 }, // Revalido a cada 60 segundos. Mesmo que tenhamos revalidado quando adicionamos um novo produto, é necessario revalidar de tempos em tempos, pois outros pessoas podem ter adicionado novos produtos de outro lugar.
    })
    if (!response.ok) throw new Error('Erro ao carregar os produtos.')
    produtos = (await response.json()) as PropsProduct[]
  } catch (error) {
    console.error(error)
    return <p>Erro ao carregar os produtos.</p>
  }
  return (
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
  )
}
