// Fizemos uma action no server para pegar o cookie, porque ele esta com o httpOnly, se não tivesse poderiamos pegar o cookie no client usando o document.cookie
// Esse arquivo pode ser tsx ou ts. Tsx caso retorne um componente React, ts caso retorne apenas uma função. Ou deixe tsx para caso no futuro queira retornar um componente React
'use server'

import { cookies } from 'next/headers'

export async function getCookie(key: string) {
  return (await cookies()).get(key)?.value
}
