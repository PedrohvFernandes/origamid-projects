// Dessa maneira aqui eu consigo criar um loading especifico para essa rota. Mas toda a pagina vai ficar em loading, ate o conteudo que não precisa demorar para ser carregado. Mas com o Suspense eu consigo carregar apenas o conteudo que demora mais tempo.

export default function Loading() {
  return <p>Carregando...</p>
}
