// Esse componente é exibido quando há um erro na renderização do componente de produtos. Para que isso aconteça ele tem que se chamar error.tsx. Esse tipo de page aqui é bom para pegar erros que não estamos prevendo

'use client'

export default function ProdutosError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main>
      <h1>Produtos</h1>
      <p style={{ color: 'red' }}>{error.message}</p>
      {/* Ele so re-renderiza o componente pai, nao re faz o fetch que quebrou */}
      <button onClick={() => reset()}>Tentar novamente</button>
    </main>
  )
}
