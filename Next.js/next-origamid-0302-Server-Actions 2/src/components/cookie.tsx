'use client'

import { getCookie } from '@/actions/get-cookie'
import React from 'react'

export function Cookie() {
  const [tokenValue, setTokenValue] = React.useState<string | undefined>(
    undefined,
  )

  async function handleClick() {
    const token = await getCookie('token')
    setTokenValue(token)
  }

  return (
    <div>
      <h2>Cookie: {tokenValue}</h2>
      <button onClick={handleClick}>Pegar cookie</button>
    </div>
  )
}
