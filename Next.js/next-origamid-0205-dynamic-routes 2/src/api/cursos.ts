type AulaDoCurso = {
  id: number
  nome: string
  slug: string
  tempo: string
  curso_id: number
  ordem: number
}

type Curso = {
  id: number
  nome: string
  slug: string
  descricao: string
  total_aulas: number
  total_horas: number
  aulas: AulaDoCurso[]
}

export type { Curso, AulaDoCurso }

export async function getCursos(): Promise<Curso[]> {
  const response = await fetch('https://api.origamid.online/cursos')
  if (!response.ok) {
    throw new Error('Failed to fetch cursos')
  }
  return response.json()
}

export async function getCurso(slug: string): Promise<Curso> {
  const response = await fetch(`https://api.origamid.online/cursos/${slug}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch curso with slug: ${slug}`)
  }
  return response.json()
}

export async function getAulaDoCurso(
  cursoSlug: string,
  aulaSlug: string,
): Promise<AulaDoCurso> {
  const response = await fetch(
    `https://api.origamid.online/cursos/${cursoSlug}/${aulaSlug}`,
  )
  if (!response.ok) {
    throw new Error(
      `Failed to fetch aula with slug: ${aulaSlug} for curso: ${cursoSlug}`,
    )
  }
  return response.json()
}
