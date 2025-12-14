'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function logout() {
  // Mesmo que a gente delete aqui e a pessoa por algum motivo salvou o token em algum lugar e quiser usar ele, o backend vai acabar aceitando, porque nós não invalidamos o token no backend. Para isso precisaríamos de um sistema de blacklist de tokens no backend ou de alguma maneira de invalidar o token lá.
  ;(await cookies()).delete('token')
  // Se fizer isso os dados do usuário ainda continuam na memória até o próximo carregamento da página. Ou seja sera necessario um hard refresh para limpar os dados. Com isso tiramos o redirect aqui e la no conta-header colocamos o window.location.href = '/login'. A segunda solução que usar o redirect aqui e usar o setUser do contexto para limpar os dados do usuário, la no conta-header.
  redirect('/login')
}
