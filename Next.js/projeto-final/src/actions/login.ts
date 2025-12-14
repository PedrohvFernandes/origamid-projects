'use server'

import { TOKEN_POST } from '@/functions/api'
import apiError from '@/functions/api-error'
import { stateProps } from '@/types/action'
import { cookies } from 'next/headers'

export async function login(state: stateProps, formData: FormData) {
  const username = formData.get('username')?.toString() as string | null
  const password = formData.get('password')?.toString() as string | null

  try {
    // Se algum erro desse explodir, ele já cai no catch e no catch eu retorno o erro formatado
    if (!username || !password) {
      throw new Error('Preencha os dados')
    }
    const { url } = TOKEN_POST()

    const response = await fetch(url, {
      method: 'POST',
      // So indicamos que o corpo da requisição é um json caso estejamos enviando um json
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({ username, password }),
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Usuário ou senha inválidos')
    }

    const data = await response.json()
    ;(await cookies()).set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 1 week. 60 seconds * 60 minutes * 24 hours * 7 days
    })

    // Como eu não quero retornar dados sensiveis para o cliente, eu retorno apenas um ok true
    return { ok: true, data: null, error: '' }
  } catch (e: unknown) {
    return apiError(e)
  }
}
