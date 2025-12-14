// import { jwtVerify } from 'jose'

export async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false

  try {
    // await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET), {
    //   algorithms: ['HS256'], // Algoritmo usado para assinar(codificar) o token
    // })
    return true
  } catch (error) {
    return false
  }
}
