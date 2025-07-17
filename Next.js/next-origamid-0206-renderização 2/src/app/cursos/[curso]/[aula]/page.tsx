import { getAulaDoCurso } from '@/api/cursos'

// type AulaDoCursoParams = {
//   params: {
//     curso: string
//     aula: string
//   }
// }

// https://stackoverflow.com/questions/79124951/type-error-in-next-js-route-type-params-id-string-does-not-satis
// Types of property 'params' are incompatible quando rodamos o build, para concertar o tipo de params para uma Promise

type AulaDoCursoParams = Promise<{
  params: {
    curso: string
    aula: string
  }
}>

export default async function AulaDoCurso({
  params,
}: {
  params: AulaDoCursoParams
}) {
  const { params: resolvedParams } = await params

  const aulaDoCurso = await getAulaDoCurso(
    resolvedParams.curso,
    resolvedParams.aula,
  )

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
      <p>Slug do Curso: {resolvedParams.curso}</p>
    </main>
  )
}
