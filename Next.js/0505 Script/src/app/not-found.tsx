import Link from "next/link";

export default async function NotFound() {
  return (
    <main>
      <h1>Página não encontrada</h1> 
      <Link href="/">Voltar para a página inicial</Link>
    </main>
  )
}