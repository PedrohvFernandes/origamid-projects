'use server'
import { PropsProduct } from '@/app/produtos/page'
// import { revalidatePathAction } from './revalidade-path'
import { revalidatePath } from 'next/cache'

export async function addProduct(product: FormData) {
  // Aqui você pode adicionar a lógica para salvar o produto, por exemplo:
  // await db.products.add({ nome, preco, descricao, estoque, importado })

  const productData: PropsProduct = {
    nome: product.get('nome') as string,
    preco: Number(product.get('preco')),
    descricao: product.get('descricao') as string,
    estoque: Number(product.get('estoque')),
    importado: Number(product.get('importado')) as 0 | 1,
  }

  await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  })
  // Após adicionar o produto, você pode revalidar a rota de produtos
  // await revalidatePathAction('/produtos') // pode usar a função que criamos
  revalidatePath('/produtos') // ou se quiser usar a função do próprio next, que é mais simples, porque estamos na action
}
