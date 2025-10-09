'use client'

import { addProduct } from '@/actions/add-product'
import Button from '@/components/button'
// import { useFormState } from 'react-dom' // Pode usar assim, mas ele da um warning: ReactDOM.useFormState has been renamed to React.useActionState. Please update AdicionarProdutosPage to use React.useActionState. Ele pede para trocar para React.useActionState.
import { useActionState } from 'react'

export default function AdicionarProdutosPage() {
  const [state, formAction] = useActionState(addProduct, {
    errors: [],
  })
  console.log(state)
  return (
    <main>
      <h1>Adicionar Produtos</h1>

      <form action={formAction}>
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
        <Button>Adicionar Produto</Button>
        {state.errors.length > 0 && (
          <ul style={{ color: 'red' }}>
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </main>
  )
}
