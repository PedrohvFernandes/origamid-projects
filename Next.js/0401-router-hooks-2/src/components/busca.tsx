'use client'

import { useSearchParams } from 'next/navigation'

export function Busca() {
  // const searchParams = new URLSearchParams(window.location.search)
  // Ex: ?page=2&busca=carros. Ou seja, tudo que vem depois do "?" na URL. Diferente do useParams, que pega os parametros da rota (ex: /produtos/:id) que são definidos no arquivo de rotas, ex: /produtos/[id]. ou seja, dentro de app temos /produtos/[id]/page.tsx, e nesse [id] é o que o useParams pega. Agora nesse caso aqui é diferente, pq o useSearchParams pega os parametros que vem depois do "?" na URL, que são os query params.
  const searchParams = useSearchParams()
  const busca = searchParams.get('busca')
  return <div>Busca: {busca}</div>
}
