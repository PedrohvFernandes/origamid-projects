'use server'

import { PASSWORD_RESET } from '@/functions/api'
import apiError from '@/functions/api-error'
import { stateProps } from '@/types/action'
import { redirect } from 'next/navigation'

export async function passwordReset(state: stateProps, formData: FormData) {
  const login = formData.get('login')?.toString() as string | null
  const key = formData.get('key')?.toString() as string | null
  const password = formData.get('password')?.toString() as string | null

  try {
    if (!login || !key) {
      redirect('/login')
    }

    if (!password) {
      throw new Error('Preencha os dados')
    }

    const { url } = PASSWORD_RESET()

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Não autorizado')
    }
    redirect('/login')
  } catch (e: unknown) {
    return apiError(e)
  }
}
