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
            {/* 
              Apos build essas imagens serao otimizadas e servidas no formato ideal para o navegador. Ja não irão mais vir do servidor origamid, mas sim do servidor do nextjs. Width e height são obrigatórios para o next poder calcular o aspect ratio e reservar o espaço na tela para evitar o layout shift.
            */}
            <Image
              src={animal.imagem}
              alt={animal.nome}
              width={2400}
              height={1600}
              quality={75} // Qualidade da imagem, padrão é 75. Pode ser de 1 a 100. No 100 a imagem fica muito pesada, do tipo webp
              sizes="100vw" // Define o tamanho da imagem baseado na largura da viewport. Isso aqui não é css, isso influencia qual imagem o next vai carregar, tamanho dela original adaptado para o tamanho da tela. Antes em uma tela de celular ele carregava a imagem grande 2400px x 1600px adaptando via css, agora ele ja carrega a imagem no tamanho ideal para a tela do usuario, ficando ainda mais leve e a qualidade fica a mesma. O next sabe que para cada tela ele tem que carregar uma imagem diferente, baseado na largura da tela, isso é definido no next.config.js deviceSizes(uma prop escondida, ja definida por padrão) e imageSizes(que é para imagens customizadas, como icones, que não são responsivas).
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
