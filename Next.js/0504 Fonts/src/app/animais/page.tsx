import Image from 'next/image'
import styles from './animais.module.css'

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
      {/* 
        Para svg nao é necessario resize para otimizar, porque o svg é um vetor, ele ja faz isso por padrão.
      */}
      <Image
        src="/image/dogs.svg"
        alt="Marca Dogs"
        width={28}
        height={22}
        priority
      />
      {/* 
        Lembrando que com a tag image ele nao usa mais a imagem do public, ele otimiza a imagem e entrega no formato ideal para o navegador(webp). Se for uma imagem muito grande, ele redimensiona para o tamanho que voce pediu.
      */}
      <Image
        src="/image/login.jpg"
        alt="Dogs"
        // largura e altura deve ter a proporção da imagem original para nao distorcer a imagem. Contando que não seja maior está tudo bem, passando valores menores nao tem problema
        width={1200}
        height={1600} // entao se eu passar 800 aqui nao teria problema, ela continuaria do mesmo tamanho na tela
        sizes="100vw"
        fill // Ele ja coloca o 100vw automaticamente
        priority
      />
      <h1>Animais</h1>
      <ul className={styles.animais}>
        {animais.map((animal, index) => (
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
              quality={75}
              // abaixo de 600px de largura, a imagem vai ocupar 100% da tela. Acima disso, 50%. o porque disso é porque a gente definiu 2 colunas no css quando fica maior que 600px, com isso nao tem necessidade de carregar a imagem maior que 50% da tela, porque ela nunca vai ocupar mais que isso porque o css limitou em duas colunas. E aqui pode criar diversas regras de responsividade.
              sizes="(max-width: 600px) 100vw, 50vw"
              // Essa prop á para as imagens que aparecem primeiro no site, logo que você entra no site. O priority faz com que de prioridade para o carregamento dessa imagem, ou seja, ela vai ser carregada antes das outras imagens que não tem essa prop. Isso é importante para melhorar a performance do site, principalmente em conexões lentas. Nesse caso aqui esta dando para a lista inteira
              // priority
              // Dessa maneira aqui só as duas primeiras imagens vão ter prioridade no carregamento. Com isso elas vao ter priority high e as outras lazy loading
              priority={index < 2}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
