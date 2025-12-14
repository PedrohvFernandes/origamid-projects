'use server'

import { PASSWORD_LOST } from '@/functions/api'
import apiError from '@/functions/api-error'
import { stateProps } from '@/types/action'

export async function passwordLost(state: stateProps, formData: FormData) {
  const login = formData.get('login')?.toString() as string | null
  const urlLogin = formData.get('url')?.toString() as string | null

  try {
    if (!login) {
      throw new Error('Preencha os dados')
    }

    const { url } = PASSWORD_LOST()

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, url: urlLogin }),
    })

    if (!response.ok) {
      throw new Error('Email ou usuário não cadastrado')
    }

    return { ok: true, error: '', data: null }
  } catch (e: unknown) {
    return apiError(e)
  }
}
