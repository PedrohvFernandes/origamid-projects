type Acao = {
  nome: string
  preco: number
  atualizada: string
}

type PageParams = {
  params: {
    acao: string
  }
}

export const revalidate = 5

// Acessando os valores da rota via parâmetro, ex: /acoes/lua, o lua vai ser meu params.acao
export default async function AcaoPage({ params }: PageParams) {
  const response = await fetch(
    `https://api.origamid.online/acoes/${params.acao}`,
    {
      next: {
        // revalidate: 0,
        tags: ['acoes'],
      },
    },
  )

  const acao = (await response.json()) as Acao

  return (
    <main>
      <h1>Ações</h1>
      <h2>{acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      <p>Atualizada: {acao.atualizada}</p>
    </main>
  )
}
