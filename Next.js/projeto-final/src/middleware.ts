import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './functions/verify-token'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  // const authenticated = !!token
  const authenticated = token ? await verifyToken(token) : false

  // Por enquanto isso aqui é so para UX do usuario, porque hoje não tem proteção nenhuma, se a pessoa quiser colocar um token falso ela consegue acessar a rota /conta. Para proteger mesmo, teria que fazer a verificação do token no backend em cada requisição ou aqui mesmo no middleware, mas sem ser a cada requisição.
  if (!authenticated && request.nextUrl.pathname.startsWith('/conta')) {
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  if (authenticated && request.nextUrl.pathname.startsWith('/login')) {
    const accountUrl = new URL('/conta', request.url)
    return NextResponse.redirect(accountUrl)
  }

  // SE NENHUMA DAS CONDIÇÕES FOR ATENDIDA, PERMITE A NAVEGAÇÃO
  return NextResponse.next()
}

// As rotas que irão utilizar o middleware. Qualquer rota que comece com /conta, incluindo subrotas. E também qualquer rota que comece com /login, incluindo subrotas.
export const config = {
  matcher: ['/conta/:path*', '/login/:path*'],
}
