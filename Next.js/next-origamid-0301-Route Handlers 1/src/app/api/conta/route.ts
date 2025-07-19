import { cookies } from 'next/headers'

// Ele deixou um GET, mas acredito que isso deveria ser um POST, pois estamos fazendo um login. Metodos/verbos HTTP são importantes para definir a intenção da requisição
export async function GET() {
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'dog',
      password: 'dog',
    }),
  })

  if (!response.ok) {
    return Response.json(
      { error: 'Failed to login' },
      { status: response.status },
    )
  }

  // Ele nos retorna um token. Não é interessante salvar isso localstorage, pois fica exposto no front. O ideal é salvar em um cookie com httpOnly
  // Assim, o cookie não é acessível pelo front
  const data = await response.json()

  ;(await cookies()).set({
    name: 'token',
    value: data.token,
    // o httpOnly impede que o cookie seja acessado via JavaScript no navegador, ex: document.cookie, so consigo pegar pelo servidor
    httpOnly: true,
    // So posso me comunicar com o cookie se for https
    secure: true,
  })

  return Response.json(data)
}
