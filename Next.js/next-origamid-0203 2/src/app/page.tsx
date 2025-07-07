// Caso eu precise ter acesso a API web logo na função do componente, sem esperar a hidratação e a pre renderização acontecer

import { Access } from '@/components/access'
import { Width } from '@/components/width'

export default async function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Width />
      <Access />
    </main>
  )
}
