'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

// Para acessar os parametros de rota de maneira externa/dinâmica, usamos o hook useParams e o usePathname
export default function Menu() {
  const params = useParams()
  const pathname = usePathname()

  React.useEffect(() => {
    // Podemos usar o pathname para fazer algo quando a rota mudar
    console.log('Rota mudou')
    console.log({ params, pathname })
  }, [pathname])

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/acoes">
          Ações {params.acao ? <span>:({params.acao})</span> : null}
        </Link>
      </li>
    </ul>
  )
}
