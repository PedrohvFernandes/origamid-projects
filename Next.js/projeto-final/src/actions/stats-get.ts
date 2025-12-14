'use server'

import { STATS_GET } from '@/functions/api'
import apiError from '@/functions/api-error'
import { cookies } from 'next/headers'

export type StatusData = {
  id: number
  title: string
  acessos: string
}

export default async function statsGet() {
  try {
    const token = (await cookies()).get('token')?.value
    if (!token) throw new Error('Token não encontrado')
    const { url } = STATS_GET()
    const response = await fetch(url, {
      // method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: { revalidate: 60 },
    })
    if (!response.ok) throw new Error('Erro ao buscar os dados de estatísticas')

    const data = (await response.json()) as StatusData[]
    return { data, ok: true, error: '' }
  } catch (error) {
    return apiError(error)
  }
}
