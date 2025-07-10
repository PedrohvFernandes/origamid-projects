import { getAulaDoCurso } from '@/api/cursos'

type AulaDoCursoParams = {
  params: {
    curso: string
    aula: string
  }
}

export default async function AulaDoCurso({ params }: AulaDoCursoParams) {
  const aulaDoCurso = await getAulaDoCurso(params.curso, params.aula)

  return (
    <main>
      <h1>Aula do Curso</h1>
      <h2>{aulaDoCurso.nome}</h2>
      <p>Slug: {aulaDoCurso.slug}</p>
      <p>Tempo: {aulaDoCurso.tempo}</p>
      <p>Ordem: {aulaDoCurso.ordem}</p>
      <p>Curso ID: {aulaDoCurso.curso_id}</p>
      <p>Aula ID: {aulaDoCurso.id}</p>
      <p>Slug da Aula: {aulaDoCurso.slug}</p>
      <p>Slug do Curso: {params.curso}</p>
    </main>
  )
}
