'use server'

import { USER_POST } from '@/functions/api'
import apiError from '@/functions/api-error'
import { login } from './login'
import { stateProps } from '@/types/action'

export async function userPost(state: stateProps, formData: FormData) {
  const username = formData.get('username')?.toString() as string | null
  const email = formData.get('email')?.toString() as string | null
  const password = formData.get('password')?.toString() as string | null

  try {
    // Lembrando que essa validação esta sendo feita no servidor, então mesmo que o usuário burle o front-end, ele não conseguirá enviar dados incompletos para a API. Então foque em fazer validações importantes no servidor.
    if (!username || !password || !email) {
      throw new Error('Preencha os dados')
    }

    // ex: Se nao quiser fazer assim, você pode usar libs de validação como zod ou yup ou regex
    if (password.length < 6) {
      throw new Error('A senha precisa ter no mínimo 6 caracteres')
    }

    const { url } = USER_POST()

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Email ou usuário já cadastrado')
    }

    const { ok } = await login({ ok: true, error: '', data: null }, formData)
    if (!ok) throw new Error('Erro ao logar após cadastro')
    return { ok: true, error: '', data: null }
  } catch (e: unknown) {
    return apiError(e)
  }
}
