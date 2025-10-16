import { NextResponse, type NextRequest } from 'next/server'

// A função middleware é executada em todas as requisições, antes de chegar na rota
export function middleware(request: NextRequest) {
  console.log(`${request.nextUrl.pathname}`)

  const token = request.cookies.get('token')?.value
  if (token) {
    // Se tiver token, continue para a rota que ele esta tentando acessar
    return NextResponse.next()
  } else {
    // Com o new URL nao precisamos passar localhost:3000 ou o dominio real da aplicação
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  // Somente nessa/nessas rotas a middleware será aplicada
  // matcher: '/conta',
  // matcher: ['/conta', '/login'],
  matcher: ['/conta'],
}
