import { jwtVerify } from 'jose'

export async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET),
      {
        algorithms: ['HS256'], // Algoritmo usado para assinar(codificar) o token
      },
    )
    return !!payload
  } catch (error) {
    return false
  }
}
