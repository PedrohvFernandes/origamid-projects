'use client'

import {
  // revalidatePathAction,
  revalidateTagAction,
} from '@/actions/revalidade-path'
import React from 'react'

export default function Atualizar() {
  // Ele atualiza o cache de uma rota especifica e a interface
  function handleClick() {
    // Acoes é a rota que eu quero revalidar tudo que tenha cache. localhost:3000/acoes
    // revalidatePathAction('/acoes')

    // Revalida as tags que eu passar. Todas as rotas que usam essa tag são revalidadas
    revalidateTagAction('acoes')
  }

  // Essa talvez nao seja a melhor forma de fazer isso, mas é uma forma simples
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleClick()
  //   }, 10000) // A cada 10 segundos ele revalida o cache e a interface
  //   // limpa o intervalo quando o componente for desmontado
  //   return () => clearInterval(interval)
  // }, [])

  return <button onClick={handleClick}>Atualizar</button>
}
