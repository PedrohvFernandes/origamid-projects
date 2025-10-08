// Server action. Uma ação que pode ser chamada do cliente para revalidar o cache de uma rota específica

'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

// Colocamos Action porque dentro do next ja existe uma função chamada revalidatePath
export async function revalidatePathAction(path: string) {
  // É uma função do next que revalida o cache de uma rota específica. E so funciona em server action. Somente no servidor
  revalidatePath(path)
}

export async function revalidateTagAction(tag: string) {
  // Revalida todas as rotas que usam essa tag
  revalidateTag(tag)
}
