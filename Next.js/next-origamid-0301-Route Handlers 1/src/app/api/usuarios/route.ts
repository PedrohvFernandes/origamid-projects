// exemplo que podemos criar outras rotas /api/usuarios

export async function GET() {
  return Response.json({
    ok: true,
    method: 'GET',
    pagina: 'Usuários',
  })
}
