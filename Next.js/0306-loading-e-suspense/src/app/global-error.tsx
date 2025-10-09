// Essa tela de erro global é exibida quando ocorre um erro em qualquer parte do aplicativo Next.js, incluindo durante a renderização do lado do servidor ou do cliente. E so funciona com o build

'use client'

export default function GlobalError() {
  return (
    <html lang="pt-BR">
      <body>
        <h1>Um Erro ocorreu</h1>
      </body>
    </html>
  )
}
