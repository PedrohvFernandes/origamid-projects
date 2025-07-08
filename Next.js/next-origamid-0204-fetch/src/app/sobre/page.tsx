import { ClientFetch } from '@/components/client-fetch'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página Sobre do projeto Next.js da Origamid',
}

export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>

      <ClientFetch />
    </main>
  )
}
