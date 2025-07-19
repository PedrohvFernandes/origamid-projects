import { cookies } from 'next/headers'

export async function GET() {
  // Eu pego o cookie pelo servidor, e não pelo cliente
  const token = (await cookies()).get('token')?.value

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  return Response.json(data)
}
