'use client'

import React, { useActionState } from 'react'
import { RootInput } from '../forms/input'
import { ErrorMessage } from '../helper/error-message'
import styles from './login-form.module.css'
import { passwordReset } from '@/actions/password-reset'
import { FormButton } from '../forms/form-button'
import { ResetPageProps } from '@/app/login/resetar/page'

export function LoginResetForm({ keyToken, login }: ResetPageProps) {
  const [state, action] = useActionState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  })

  return (
    <form action={action} className={styles.form}>
      <RootInput
        labelProps={{ label: 'Nova Senha' }}
        inputProps={{
          name: 'password',
          placeholder: 'Digite sua Nova Senha',
          type: 'password',
        }}
      />
      <input type="hidden" name="key" value={keyToken} />
      <input type="hidden" name="login" value={login} />
      <FormButton loadingText="Resetando...">Resetar senha</FormButton>
      <ErrorMessage message={state.error} />
    </form>
  )
}
