// Eu poderia utilizar esse componente dentro de qualquer outra pagina, caso fosse um menu específico daquela rota, ou layout de uma determinada rota, e até mesmo dentro do layout global da aplicação, como um menu de navegação principal.

import Link from 'next/link'

export function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}
