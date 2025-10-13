import { getCursos } from '@/api/cursos';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Curso Origamid',
  description: 'Detalhes do curso. Curso online de front-end com HTML, CSS e JavaScript',
  keywords: ['curso', 'detalhes', 'aulas', 'HTML', 'CSS', 'JavaScript', 'ui design'],
  authors: [{ name: 'André Rafel', url: 'https://andrerafael.com' }],
}

export default async function CursosPage() {
  const cursos = await getCursos();
  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
