import statsGet from '@/actions/stats-get'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Lazy load so para carregar no client side, ou seja, não tenta renderizar no servidor, somente quando o cliente carregar a página
const ContaEstatisticas = dynamic(
  () => import('@/components/conta/conta-estatisticas'),
  {
    loading: () => <p>Carregando estatísticas...</p>,
    ssr: false,
  },
)

export const metadata: Metadata = {
  title: 'Estatísticas | Minha Conta',
  description: 'Página para gerenciar suas estatísticas.',
}

export default async function EstatisticasPage() {
  const { data } = await statsGet()
  if (!data) return null
  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  )
}
