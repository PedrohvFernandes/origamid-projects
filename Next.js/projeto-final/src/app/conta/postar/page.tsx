import { ContaPhotoPost } from '@/components/conta/conta-photo-post'
import { Metadata } from 'next'

// Na epoca desse projeto quera o next 14 tinha um problema de runtime, para enviar fotos, com isso tinha que fazer isso: (mas esse bug foi resolvido, então não precisa passar isso)
export const runtime = 'edge' // runtime mais leve para upload de fotos

export const metadata: Metadata = {
  title: 'Postar | Minha Conta',
  description: 'Página para postar novos conteúdos na sua conta.',
}

export default async function PostarPage() {
  return <ContaPhotoPost />
}
