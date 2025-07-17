'use client'

import React from 'react'

type Acao = {
  simbolo: string
  atualizada: string
}

export default function AcoesPage() {
  const [acao, setAcao] = React.useState<Acao | null>(null)

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.origamid.online/acoes/lua')
      const data = (await response.json()) as Acao
      setAcao(data)
    }
    fetchData()
  }, [])

  if (!acao) {
    return <p>Carregando...</p>
  }

  return (
    <main>
      <h1>{acao?.simbolo}</h1>
      <h2>{acao?.atualizada}</h2>
    </main>
  )
}
