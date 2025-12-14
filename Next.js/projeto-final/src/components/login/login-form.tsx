'use client'

import { login } from '@/actions/login'
import React, { useActionState } from 'react'
import { RootInput } from '../forms/input'
import { ErrorMessage } from '../helper/error-message'
import Link from 'next/link'
import styles from './login-form.module.css'
import { FormButton } from '../forms/form-button'

// O button tem que estar em um componente separado para funcionar o useFormStatus no form que ele vai ser usado. Imagine que talvez nesse login form eu tivesse mais de um form e cada um eu precisasse de um botão, para o react entender que para cada form eu preciso de um useFormStatus diferente, e isso só é possivel fazendo um botão separado para ele ser montando em diferentes forms dentro do mesmo componente. Caso usasse o mesmo useFormStatus dentro do mesmo componente, ele iria entender que é o mesmo estado para todos os forms.
// function FormButton({ children }: Readonly<{ children: React.ReactNode }>) {
//   const { pending } = useFormStatus()

//   return (
//     <Button disabled={pending}>{pending ? 'Carregando...' : children}</Button>
//   )
// }

export function LoginForm() {
  // Primeiro passamos a action, segundo o estado inicial, você define o estado inicial para o que você espera que a action retorne
  const [state, action] = useActionState(login, {
    ok: false,
    error: '',
    data: null,
  })

  React.useEffect(() => {
    if (state.ok) {
      // Redirecionar ou fazer algo em caso de sucesso. Simulando um redirecionamento simples:
      window.location.href = '/conta'
    }
  }, [state.ok])

  return (
    <>
      <form action={action} className={styles.form}>
        <RootInput
          labelProps={{ label: 'Usuário' }}
          inputProps={{
            name: 'username',
            placeholder: 'Digite seu nome',
            type: 'text',
          }}
        />
        <RootInput
          labelProps={{ label: 'Senha' }}
          inputProps={{
            name: 'password',
            placeholder: 'Digite sua senha',
            type: 'password',
          }}
        />
        <ErrorMessage message={state.error} />
        <FormButton>Entrar</FormButton>
      </form>
      <Link href="/login/perdeu" className={styles.perdeu}>
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link href="/login/cadastro" className="button">
          Cadastro
        </Link>
      </div>
    </>
  )
}
