import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página Sobre do projeto Next.js da Origamid',
}

// Para o sistema de rotas do Next.js, a página Sobre deve ser criada dentro da pasta `app/sobre`, e o arquivo deve ser nomeado como `page.tsx` ou `page.jsx` e ser exportado como um componente React padrão. O nome da função não importa, mas iremos usar um padrão de nomenclatura para facilitar a identificação. Nome da rota(nome da pasta) + "Page". Ex: SobrePage
export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
      <p>Essa é a página Sobre</p>
      <h2 id="teste" style={{ margin: '1600px 0' }}>
        Teste
      </h2>
    </main>
  )
}
