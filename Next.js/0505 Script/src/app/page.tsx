import Script from 'next/script'

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      {/* 
       Dessa forma eu não preciso passar a prop id, mas se quiser pode
      */}
      {/* <Script /> */}

      {/* <Script id="script-test">{`console.log('Script carregado!')`}</Script> */}

      {/* De terceiros */}
      <Script
        id="script-test"
        src="http://localhost:3005/scripts/idade-legal.min.js"
        // strategy="afterInteractive" // Carrega o script depois que a página for interativa, então isso nao bloqueia o carregamento da página para carregar o script
        strategy="beforeInteractive" // Carrega o script antes da página ser interativa, então isso bloqueia o carregamento da página para carregar o script. Isso é so para scripts que são essenciais para a página
      />
    </main>
  )
}
