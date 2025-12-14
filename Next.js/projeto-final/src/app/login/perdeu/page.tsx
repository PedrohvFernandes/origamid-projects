import { LoginPerdeuForm } from '@/components/login/login-perdeu-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perdeu | Dogs',
  description: 'Recuperação de senha no site dogs',
}

//  1 solução: Com isso eu garanto que essa pagina sempre vai ser renderizada no cliente e ela não vai ser pre renderizada no servidor. Mas usamos a segunda solução no proprio form de perdeu
// export const dynamic = 'force-dynamic'

export default async function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </div>
  )
}
