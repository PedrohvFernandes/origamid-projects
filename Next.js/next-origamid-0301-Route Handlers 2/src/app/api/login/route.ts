import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const [username, password] = [body.username, body.password]

  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(body),
    body: JSON.stringify({ username, password }),
  })

  if (!response.ok) {
    return Response.json({ message: 'Erro ao fazer login' }, { status: 401 })
  }

  const data = await response.json()

  ;(await cookies()).set({
    name: 'token',
    value: data.token,
    httpOnly: true,
    secure: true,
  })

  return Response.json(
    { message: 'Login realizado com sucesso' },
    { status: 200 },
  )
}
