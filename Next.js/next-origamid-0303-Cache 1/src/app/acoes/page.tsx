import Atualizar from '@/components/atualizar'

type AcoesProps = {
  nome: string
  preco: number
  atualizada: number
}

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua', {
    // cache: 'no-store', // 'force-cache' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached' --> Nao carrega do cache. force-cache carrega do cache. Por padrao hoje é o default 'default' que parece ser o no cache
    // next: { revalidate: 10 }, // Revalida a cada 10 segundos. Vou ter cache, mas a cada 10 segundos ele busca uma nova versao. Ele so gera o cache depois dos 10 segundos apos fazer o primeiro carregamento e somente depois que eu carregar a pagina novamente esse cache que foi guardado inicialmente apos 10 segundo é exibido. E vai sendo assim, aí ao passar novamente 10 segundo e eu carregar a pagina novamente ele gera e guarda o cache por de baixo, e somente apos carregar a pagina novamente é exibido o cache que foi guardado.
    next: { tags: ['acoes'] }, // Tags para invalidar o cache(pode ser qualquer nome na tag, é tipo react query).
  })

  const acao = (await response.json()) as AcoesProps

  return (
    <main>
      <h1>Acoes</h1>
      <Atualizar />
      <h2>{acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      <p>Atualizado em: {acao.atualizada}</p>
    </main>
  )
}
