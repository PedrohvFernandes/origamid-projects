import { LoginResetForm } from '@/components/login/login-reset-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resetar a senha | Dogs',
  description: 'Resetar a senha no site dogs',
}

export type ResetPageProps = {
  keyToken?: string
  login?: string
}

type ResetSearchParams = {
  searchParams: ResetPageProps
}

export default async function ResetPage({ searchParams }: ResetSearchParams) {
  const { keyToken, login } = searchParams
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <LoginResetForm keyToken={keyToken} login={login} />
    </div>
  )
}
