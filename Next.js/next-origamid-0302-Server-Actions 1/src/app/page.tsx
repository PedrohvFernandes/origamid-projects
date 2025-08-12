'use client'

import { setCookie } from '@/actions/set-cookie'
import { useState } from 'react'

export default function Home() {
  const [valor, setValor] = useState('')
  async function handleClick() {
    const response = await setCookie('myCookie', 'cookieValue')
    setValor(response.value)
    console.log(response)
  }
  return (
    <main>
      <h1>Home: {valor}</h1>
      <button onClick={handleClick}>Definir cookie</button>
    </main>
  )
}
