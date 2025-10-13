import { getCurso, getCursos } from '@/api/cursos'
import Link from 'next/link'

type PageParams = {
  params: {
    curso: string
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
