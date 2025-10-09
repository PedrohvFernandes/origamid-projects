import ProdutosLista from '@/components/produtos-lista'
import { Suspense } from 'react'

export default async function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>
      <p>Essa aqui é a lista de produtos:</p>
      {/* 
        Com o suspense eu consigo carregar apenas o conteudo que demora mais tempo para ser carregado, e o restante da pagina ja aparece para o usuario. Em partes isso é melhor que o loading.tsx, que deixa a pagina toda em loading.
      */}
      <Suspense fallback={<p>Carregando a lista de produtos...</p>}>
        <ProdutosLista />
      </Suspense>

      {/* E da para ir colocando novas listas de produtos para irem carregando sequencialmente */}
      {/* 
        Isso não impacta no SEO porque o conteudo é renderizado no servidor e é carregado no html final, isso não é um carregamento do client, e o html não fica limpa/puro como um fetch tradicional do react o que afeta muito o Seo, porque é feito com js puro.
      */}
      <Suspense fallback={<p>Carregando a lista de produtos...</p>}>
        <ProdutosLista espera={3000} />
      </Suspense>
    </main>
  )
}
