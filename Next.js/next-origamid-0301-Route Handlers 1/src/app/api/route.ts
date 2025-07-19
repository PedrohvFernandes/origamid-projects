// É uma forma que o next da para criar rotas para uma API dentro da aplicação. Basicamente, estamos criando uma API dentro do Next.js. Aqui conseguimos criar rotas que acessam outra api
// Nada disso aqui é exposto no front
// Criamos uma rota /api mas pode ser qualquer nome. O que tem que ser criado é o arquivo route.ts, e nunca colocar o page.tsx

import { NextRequest } from 'next/server'

export async function GET() {
  // A rota aqui não é exposta e nem a apiKey. O que vai ser exposto é a rota /api
  // E caso a API aqui mude, não precisamos mudar nada no front, pois o front vai continuar acessando a rota /api
  const response = await fetch('https://api.origamid.online/vendas', {
    // La no back foi configurado um cabeçalho, onde precisamos um apiKey. O valor é unico. Dessa forma aqui, não é exposto no front
    headers: {
      apiKey: `ORIGAMID123456`,
    },
  })

  const vendas = await response.json()

  return Response.json(vendas)
}

// O request usa algumas coisas da API web padrão e mais algumas coisas do Next.js
export async function POST(request: NextRequest) {
  const param = request.nextUrl.searchParams.get('busca')

  const body = await request.json()

  return Response.json({
    param,
    body,
  })
}
