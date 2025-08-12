// Agora é uma ação do servidor
// Uma server action é uma função que pode ser chamada do lado do cliente. É uma rota do servidor que pode ser invocada diretamente do cliente. É uma rota que é criada automaticamente pelo Next.js e que podemos fazer um POST para ela
// É como se fosse uma route handler, só que automatica

'use server'

import { cookies } from 'next/headers'

// Então basicamente é como se fosse um fetch, só que feito de forma automática pelo Next.js, sem precisar da gente usar a API fetch, sem ter que criar uma rota, nada disso
export async function setCookie(key: string, value: string) {
  ;(await cookies()).set(key, value, {
    httpOnly: true,
    secure: true,
  })

  return {
    funcionou: true,
    value,
  }
}
