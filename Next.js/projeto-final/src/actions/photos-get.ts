'use server'

import { PHOTOS_GET } from '@/functions/api'
import apiError from '@/functions/api-error'

export type Photo = {
  id: number
  title: string
  src: string
  author: string
  date: string
  peso: string
  idade: string
  acessos: string
  total_number: string
}

type PhotoGetParams = {
  page?: number
  total?: number
  user?: 0 | string
}

export default async function photosGet(
  { page = 1, total = 6, user = 0 }: PhotoGetParams = {},
  // Resquest init para customizar a requisição, como headers, etc
  optionsFront?: RequestInit,
) {
  // Se eu passei alguma opção no front, uso ela, se não, uso essa padrão
  const options = optionsFront || {
    // Ele invalida o cache a cada 10 segundos, mas não é ideal para dados dinâmicos. Então com isso podemos usar as tags de revalidação, com isso toda vez que eu usar a função de revalidação dessa tag, ele vai invalidar o cache.
    next: { revalidate: 10, tags: ['photos'] },
  }

  try {
    const { url } = PHOTOS_GET({ page, total, user })
    const response = await fetch(url, options)
    if (!response.ok) throw new Error('Erro ao buscar fotos')

    const data = (await response.json()) as Photo[]
    return { data, ok: true, error: '' }
  } catch (error) {
    return apiError(error)
  }
}
