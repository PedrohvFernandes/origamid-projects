import Link from 'next/link'

export async function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
