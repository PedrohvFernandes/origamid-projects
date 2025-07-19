import { cookies } from 'next/headers'
import Link from 'next/link'

export async function Menu() {
  const token = (await cookies()).get('token')?.value

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  const data = (await response.json()) as {
    autorizado: boolean
    usuario: string
  }

  console.log(data.usuario)

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        {data.autorizado ? (
          data.usuario
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
