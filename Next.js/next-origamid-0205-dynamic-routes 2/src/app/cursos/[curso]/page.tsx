import { getCurso } from '@/api/cursos'
import Link from 'next/link'

export default async function CursoPage({
  params,
}: {
  params: { curso: string }
}) {
  const curso = await getCurso(params.curso)

  return (
    <main>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <p>Total de aulas: {curso.total_aulas}</p>
      <p>Total de horas: {curso.total_horas}</p>
      <p>Slug: {curso.slug}</p>
      <h2>Aulas</h2>

      {curso.aulas.map((aula) => (
        <Link
          key={aula.id}
          href={`/cursos/${curso.slug}/${aula.slug}`}
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
