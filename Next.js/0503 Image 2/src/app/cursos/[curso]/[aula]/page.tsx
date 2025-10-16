import { Aula, getAula, getCurso, getCursos } from '@/api/cursos'
import Link from 'next/link'

type PageParams = {
  params: {
    curso: string
    aula: string
  }
}

// Aqui a situação é um pouco mais complexa, pois eu tenho duas rotas dinamicas [curso] e [aula]. Eu preciso gerar uma rota estatica para cada aula de cada curso que eu tenho na API. Para isso eu preciso primeiro pegar todos os cursos, depois para cada curso eu preciso pegar as aulas. E por fim eu preciso retornar um array com todas as aulas de todos os cursos.
export async function generateStaticParams() {
  // return [
  //   { curso: 'html', aula: 'introducao' },
  //   { curso: 'html', aula: 'estrutura' },
  // ]

  // Pegamos os cursos, depois pegamos o curso em si junto com as aulas e por fim retornamos um array com todas as aulas de todos os cursos.
  // Lembrando que a forma como foi gerado esse objeto nao necessarimente precisa ser igual a esse: [{ curso: 'html', aula: 'introducao' }], o que importa é que o nome das chaves sejam iguais aos nomes dos parametros da rota dinamica. E a forma como foi soluicionado foi especificamente para essa api.
  const cursos = await getCursos()
  // Como é retornado uma promise, eu preciso usar o Promise.all para esperar todas as promises serem resolvidas.
  const aulas = await Promise.all(cursos.map((curso) => getCurso(curso.slug)))
  return (
    aulas
      // Acumulador acc do tipo Aula[] que é um array de aulas. O Array começa vazio e para cada curso eu concateno as aulas desse curso no acumulador.
      .reduce((acc: Aula[], curso) => acc.concat(curso.aulas), [])
      // Para cada aula eu retorno um objeto com o curso e a aula. O curso eu pego do array de cursos que eu já tenho, procurando o curso que tem o mesmo id do curso_id da aula.
      .map((aula) => ({
        curso: cursos.find((curso) => curso.id === aula.curso_id)?.slug,
        aula: aula.slug,
      }))
  )
}

export default async function AulaPage({ params }: PageParams) {
  const aula = await getAula(params.curso, params.aula)
  return (
    <main>
      <Link href={`/cursos/${params.curso}`}>{params.curso}</Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo: {aula.tempo}</p>
    </main>
  )
}
