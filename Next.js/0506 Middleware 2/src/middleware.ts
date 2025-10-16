import { NextResponse, type NextRequest } from 'next/server'

// A função middleware é executada em todas as requisições, antes de chegar na rota
export function middleware(request: NextRequest) {
  console.log(`${request.nextUrl.pathname}`)
  const token = request.cookies.get('token')?.value
  const response = NextResponse.next()

  if (request.nextUrl.pathname.startsWith('/entrar')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (!token && request.nextUrl.pathname.startsWith('/conta')) {
    // Com o new URL nao precisamos passar localhost:3000 ou o dominio real da aplicação
    return NextResponse.redirect(new URL('/login', request.url))
  } else {
    response.cookies.set('entrouConta', 'true', { httpOnly: true })
    return response
  }
}

export const config = {
  // Somente nessa/nessas rotas a middleware será aplicada
  // matcher: '/conta',
  // matcher: ['/conta', '/login'],
  // matcher: ['/conta'],

  // Tem esse matcher:
  // Ele aplica a middleware em todas as rotas, exceto as que começam com _next e favicon.ico --> ?! a partir disso ele nega. Desas forma o midlleware não fica rodando atoa
  // matcher: ['/((?!_next|favicon.ico).*)'],
  matcher: ['/((?!_next|api|static|public|favicon.ico).*)'],
}
