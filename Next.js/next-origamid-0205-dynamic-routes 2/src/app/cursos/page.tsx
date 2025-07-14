import { getCursos } from '@/api/cursos'
import Link from 'next/link'
export default async function CursosPage() {
  const cursos = await getCursos()

  return (
    <main>
      <h1>Cursos</h1>
      {cursos.map((curso) => (
        <Link
          key={curso.id}
          href={`/cursos/${curso.slug}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h2>{curso.nome}</h2>
          <p>{curso.descricao}</p>
          <p>Total de aulas: {curso.total_aulas}</p>
          <p>Total de horas: {curso.total_horas}</p>
          <p>Slug: {curso.slug}</p>
          <hr />
        </Link>
      ))}
      <p>Total de cursos: {cursos.length}</p>
    </main>
  )
}
