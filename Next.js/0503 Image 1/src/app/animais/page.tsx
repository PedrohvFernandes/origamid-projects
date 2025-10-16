import Image from 'next/image'

type Animal = {
  id: number
  nome: string
  descricao: string
  imagem: string
}

export default async function AnimaisPage() {
  const response = await fetch('https://api.origamid.online/animais')
  const animais = (await response.json()) as Animal[]
  return (
    <main>
      <h1>Animais</h1>
      <ul>
        {animais.map((animal) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              src={animal.imagem}
              alt={animal.nome}
              width={2400}
              height={1600}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
