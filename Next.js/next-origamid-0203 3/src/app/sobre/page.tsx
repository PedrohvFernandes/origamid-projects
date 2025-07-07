// Carregando o componente Width, que é um client component, de forma dinamica e desabilitando a pre renderização, pois no inicio da função do componente dele, ele usa uma API web, antes de ter a hidratação.

// import { Width } from '@/components/width'
import { Width } from '@/components/width-dynamic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página Sobre do projeto Next.js da Origamid',
}

export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
      <Width />
    </main>
  )
}
