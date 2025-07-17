import Link from 'next/link'

export function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cursos">Cursos</Link>
        </li>
        <li>
          <Link href="/acoes">Ações</Link>
        </li>
      </ul>
    </nav>
  )
}
