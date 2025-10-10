'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { Suspense } from 'react'
import { Busca } from './busca'

// Para acessar os parametros de rota de maneira externa/dinâmica, usamos o hook useParams e o usePathname
export default function Menu() {
  const params = useParams()
  const router = useRouter()

  React.useEffect(() => {
    // setTimeout(() => {
    //   // Podemos usar o router para navegar programaticamente
    //   router.push('/')
    // }, 5000)

    setInterval(() => {
      router.refresh()
    }, 5000)
  }, [router])

  return (
    <>
      {/* 
      Todo componente de useSearchParams precisa ser envolvido em um Suspense, porque se não no build dá erro.
    */}
      <Suspense fallback={<div>Loading...</div>}>
        <Busca />
      </Suspense>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/acoes">
            Ações {params.acao ? <span>:({params.acao})</span> : null}
          </Link>
        </li>
        <li>
          <Link href="/acoes/?busca=xpt">Ações com query params</Link>
        </li>
      </ul>
    </>
  )
}
