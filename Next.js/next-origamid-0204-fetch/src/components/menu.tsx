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
