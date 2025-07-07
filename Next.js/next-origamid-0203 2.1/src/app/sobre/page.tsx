// Carregando o componente Width, que é um client component, de forma dinamica e desabilitando a pre renderização, pois no inicio da função do componente dele, ele usa uma API web, antes de ter a hidratação.

// import { Width } from '@/components/width'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página Sobre do projeto Next.js da Origamid',
}

// Importando o componente Width de forma dinâmica
// Isso é necessário porque o componente Width usa APIs do browser que não estão disponíveis no servidor durante a renderização inicial. Com isso desabilitamos a pre-renderização desse componente, pois ele depende de interações do usuário que só podem acontecer no browser, como o resize da janela antes da pre renderização.
// Lembrando que para fazer isso o componente precisar ser um client component e default export
const Width = dynamic(() => import('@/components/width'), {
  ssr: false, // Desabilitando a pre-renderização desse componente
})

export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
      <Width />
    </main>
  )
}
