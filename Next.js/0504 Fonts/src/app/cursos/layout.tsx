import { getCursos } from '@/api/cursos'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Curso Origamid',
  description:
    'Detalhes do curso. Curso online de front-end com HTML, CSS e JavaScript',
  keywords: [
    'curso',
    'detalhes',
    'aulas',
    'HTML',
    'CSS',
    'JavaScript',
    'ui design',
  ],
  authors: [{ name: 'André Rafel', url: 'https://andrerafael.com' }],
}

export default async function CursosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cursos = await getCursos()
  return (
    <div className="flex">
      <nav style={{ marginRight: '4rem' }}>
        <h2>Cursos</h2>
        <ul>
          {cursos.map((curso) => (
            <li key={curso.id}>
              <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  )
}
