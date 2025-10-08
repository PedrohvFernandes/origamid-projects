import { addProduct } from '@/actions/add-product'
import Button from '@/components/button'

export default function AdicionarProdutosPage() {
  return (
    <main>
      <h1>Adicionar Produtos</h1>

      <form action={addProduct}>
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
      </form>
    </main>
  )
}
