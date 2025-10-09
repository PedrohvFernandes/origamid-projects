import ProdutosLista from '@/components/produtos-lista'

export default async function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>
      <p>Essa aqui é a lista de produtos:</p>
      <ProdutosLista />
    </main>
  )
}
