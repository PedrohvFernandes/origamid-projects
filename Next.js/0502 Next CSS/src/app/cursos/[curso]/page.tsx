import { getCurso, getCursos } from '@/api/cursos'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageParams = {
  params: {
    curso: string
  }
}

// Função para gerar metadados dinamicamente com base no curso
// Estamos fazendo um fetch aqui e um no componente em si. Parece que vai ficar muito pesado, mas na verdade nao. Porque o next ele cria um cache dessa requisição, e com isso ele nao faz duas requisições, ele faz uma requisição e usa o cache na segunda vez, pois elas estão na mesma renderização.
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const curso = await getCurso(params.curso)

  return {
    title: `Curso de ${curso.nome} | Origamid`,
    description: curso.descricao,
    keywords: ['curso', 'detalhes', 'aulas', 'HTML', 'CSS', 'JavaScript', 'ui design'],
    authors: [{ name: 'André Rafel', url: 'https://andrerafael.com' }],
  }

}

// Estamos na rota dinamica cursos/[curso]/page.tsx que é onde exibe os detalhes de um curso especifico
// Essa função é chamada em build time para gerar as rotas estáticas para cada curso disponível na API.
// Assim, cada curso terá sua própria página estática gerada. Ele gera uma SSG, que é uma pagina pre renderizada de uma rota dinamica. Nos temos Rotas dinamicas, staticas e SSG
export async function generateStaticParams() {
  // return [{ curso: 'html' }, { curso: 'css' }, { curso: 'javascript' }]
  // Eu preciso que tenha uma rota estática para cada curso que eu tenho na API. E para que isso aconteça eu preciso usar o mesmo nome do parametro que é curso.
  const cursos = await getCursos()
  return cursos.map((curso) => ({
    curso: curso.slug,
  }))
}

export default async function CursoPage({ params }: PageParams) {
  const curso = await getCurso(params.curso)

  // Aqui é para quando o curso nao for encontrado, ou seja, quando a API retornar um erro. Nesse caso eu chamo a função notFound que vai redirecionar o usuário para a página not-found.tsx que está na raiz do app.
  // o ideal mesmo seria se na função getCurso eu já tratasse esse erro, mas para fins didáticos eu estou tratando aqui mesmo. Fazendo um try catch na função getCurso e de la mesmo retornando um objeto com a propriedade error: true. Aí aqui eu verifico se o curso tem a propriedade error, se tiver eu chamo a função notFound.
  if (curso.error) return notFound()

  return (
    <main>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total Horas: {curso.total_horas}</p>
      <p>Total Aulas: {curso.total_aulas}</p>
      <h2>Aulas</h2>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
