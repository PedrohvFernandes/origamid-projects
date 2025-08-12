import Link from 'next/link'

export async function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}
