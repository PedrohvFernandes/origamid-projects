// Quando usamos o spread na rota, o Next.js cria uma rota dinâmica que captura todos os segmentos de URL após o prefixo especificado. Ex: /cursos/[...sulg] irá capturar qualquer URL que comece com /cursos/ e capturar todos os segmentos subsequentes como um array chamado "sulg". Ex: /cursos/2023/01/01 irá capturar ["2023", "01", "01"] como o parâmetro "sulg".

type PageParams = {
  params: {
    slug: string[]
  }
}

export default async function CursosPage({ params }: PageParams) {
  return (
    <main>
      <h1>Cursos</h1>
      {params.slug.join('/')}
    </main>
  )
}
