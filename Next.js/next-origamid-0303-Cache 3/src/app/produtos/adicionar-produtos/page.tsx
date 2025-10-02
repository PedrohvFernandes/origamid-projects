'use client'

import { addProduct } from '@/actions/add-product'
// import { revalidatePathAction } from '@/actions/revalidade-path'
import { useRouter } from 'next/navigation'
import { PropsProduct } from '../page'

export default function AdicionarProdutosPage() {
  const route = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const product: PropsProduct = {
      nome: event.currentTarget.nome.value,
      preco: Number(event.currentTarget.preco.value),
      descricao: event.currentTarget.descricao.value,
      estoque: Number(event.currentTarget.estoque.value),
      importado: event.currentTarget.importado.value === '1' ? 1 : 0,
    }

    const { nome, preco, descricao, estoque } = product

    if (!nome || !preco || !descricao || !estoque) {
      throw new Error('Preencha todos os campos')
    }

    await addProduct(product)
    // revalidatePathAction('/produtos') pode fazer por aqui ou diretamente na action de addProduct
    route.push('/produtos') // pode usar o redirect('/produtos') do next/navigation
  }

  return (
    <main>
      <h1>Adicionar Produtos</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <br />
        <label>
          Preço:
          <input type="number" name="preco" step="1" min={0} />
        </label>
        <br />
        <label>
          Descrição:
          <textarea name="descricao" />
        </label>
        <br />
        <label>
          Estoque:
          <input type="number" name="estoque" />
        </label>
        <br />
        <label>
          Importado:
          <select name="importado">
            <option value="0">Não</option>
            <option value="1">Sim</option>
          </select>
        </label>
        <br />
        <button type="submit">Adicionar Produto</button>
      </form>
    </main>
  )
}
