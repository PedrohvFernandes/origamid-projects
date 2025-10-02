'use server'

import { PropsProduct } from '@/app/produtos/page'
// import { revalidatePathAction } from './revalidade-path'
import { revalidatePath } from 'next/cache'

export async function addProduct(product: PropsProduct) {
  // Aqui você pode adicionar a lógica para salvar o produto, por exemplo:
  // await db.products.add({ nome, preco, descricao, estoque, importado })
  await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
  // Após adicionar o produto, você pode revalidar a rota de produtos
  // await revalidatePathAction('/produtos') // pode usar a função que criamos
  revalidatePath('/produtos') // ou se quiser usar a função do próprio next, que é mais simples, porque estamos na action
}
