'use server'

import { COMMENT_POST } from '@/functions/api'
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { Comment } from './photo-get'
import apiError from '@/functions/api-error'

export async function commentPost(state: object, formData: FormData) {
  const token = (await cookies()).get('token')?.value
  const comment = formData.get('comment')?.toString() as string | null
  const id = formData.get('id')?.toString() as string | null

  try {
    if (!token || !comment || !id) {
      throw new Error('Preencha os dados')
    }

    const { url } = COMMENT_POST(id)

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar foto')
    }

    const data = (await response.json()) as Comment
    revalidateTag('comment')
    return { data, ok: true, error: '' }
  } catch (e: unknown) {
    return apiError(e)
  }
}
