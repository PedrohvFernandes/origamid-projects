'use client'

import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const navigate = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      const errorData = await response.json()
      alert(errorData.message)
    } else {
      alert('Login realizado com sucesso')
      navigate.push('/')
    }
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="POST">
        <input type="text" name="username" placeholder="Usuário" required />
        <input type="password" name="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
    </main>
  )
}
