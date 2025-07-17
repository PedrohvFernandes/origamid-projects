import { getCurso } from '@/api/cursos'
import Link from 'next/link'

// https://stackoverflow.com/questions/79124951/type-error-in-next-js-route-type-params-id-string-does-not-satis
// Types of property 'params' are incompatible quando rodamos o build, para concertar o tipo de params para uma Promise

// export default async function CursoPage({
//   params,
// }: {
//   params: { curso: string }
// })

export default async function CursoPage({
  params,
}: {
  params: Promise<{
    curso: string
  }>
}) {
  const { curso } = await params

  const cursoData = await getCurso(curso)

  return (
    <main>
      <h1>{cursoData.nome}</h1>
      <p>{cursoData.descricao}</p>
      <p>Total de aulas: {cursoData.total_aulas}</p>
      <p>Total de horas: {cursoData.total_horas}</p>
      <p>Slug: {cursoData.slug}</p>
      <h2>Aulas</h2>

      {cursoData.aulas.map((aula) => (
        <Link
          key={aula.id}
          href={`/cursos/${cursoData.slug}/${aula.slug}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h3>{aula.nome}</h3>
          <p>Slug: {aula.slug}</p>
          <p>Tempo: {aula.tempo}</p>
          <p>Ordem: {aula.ordem}</p>
          <hr />
        </Link>
      ))}
    </main>
  )
}
