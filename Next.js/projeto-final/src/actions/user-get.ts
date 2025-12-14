'use server'

import { USER_GET } from '@/functions/api'
import apiError from '@/functions/api-error'
import { User } from '@/types/user'
import { cookies } from 'next/headers'
// import { cache } from 'react'

export async function userGet() {
  try {
    const token = (await cookies()).get('token')?.value
    if (!token) throw new Error('Token não encontrado')

    const { url } = USER_GET()

    // On next deixa somente o fetch em cache, quando ele é solicitado mais de uma vez em partes diferentes da aplicação. Se eu quero deixar todo o userGet em cache, eu envolvo ele em uma função com cache do next.
    const response = await fetch(url, {
      method: 'GET', // Quando é GET não tem necessidade de passar o método, porque é o padrão
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: { revalidate: 60 }, // Revalida a cada 60 segundos. Ele mantem em cache por mais tempo
    })

    if (!response.ok) {
      throw new Error('Erro ao buscar os dados do usuário')
    }

    const data = (await response.json()) as User

    return { ok: true, error: '', data }
  } catch (e: unknown) {
    return apiError(e)
  }
}

// Deixando toda a função em cache e não somente o fetch. Essa é uma das formas de fazer cache no next e eu usar o nome do user em varias partes da aplicação sem precisar fazer várias requisições para pegar o mesmo dado.
// const userGetCache = cache(userGet)
// export default userGetCache
