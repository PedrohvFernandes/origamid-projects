'use server'

import { PHOTO_DELETE } from '@/functions/api'
import apiError from '@/functions/api-error'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function photoDelete(id: string) {
  const token = (await cookies()).get('token')?.value

  try {
    if (!token) {
      throw new Error('Usuário não está logado')
    }

    const { url } = PHOTO_DELETE(id)

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    if (!response.ok) {
      throw new Error('Erro ao deletar a foto')
    }
  } catch (e: unknown) {
    return apiError(e)
  }
  revalidateTag('photos')
  redirect('/conta')
}
