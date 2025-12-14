'use client'

import React, { useActionState } from 'react'
import { RootInput } from '../forms/input'
import { ErrorMessage } from '../helper/error-message'
import styles from './login-form.module.css'
import { FormButton } from '../forms/form-button'
import { userPost } from '@/actions/user-post'

export function LoginCriarForm() {
  // Primeiro passamos a action, segundo o estado inicial, você define o estado inicial para o que você espera que a action retorne
  const [state, action] = useActionState(userPost, {
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
        labelProps={{ label: 'Email' }}
        inputProps={{
          name: 'email',
          placeholder: 'Digite seu email',
          type: 'email',
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
      <FormButton>Cadastrar</FormButton>
    </form>
  )
}
