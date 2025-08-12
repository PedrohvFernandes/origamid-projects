'use client'

import { login } from '@/actions/login'

export default function Login() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const response = await login(
      data.username as string,
      data.password as string,
    )
    console.log('Login response:', response)
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
