'use client'

import React, { useActionState } from 'react'
import { RootInput } from '../forms/input'
import { ErrorMessage } from '../helper/error-message'
import styles from './login-form.module.css'
import { passwordLost } from '@/actions/password-lost'
import { SuccessMessage } from '../helper/success-mensage'

export function LoginPerdeuForm() {
  const [state, action] = useActionState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  })
  // 2 solução. O valor inicial do estado é executado no servidor, por isso não posso passar aqui também window
  const [url, setUrl] = React.useState('')
  React.useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'))
  }, [])

  // Isso daqui o next pre renderiza no servidor. Se eu usar o useEffect, ele só vai rodar no cliente. Ele vai tentar acessar o window no servidor, e não vai encontrar. Com isso o build quebra. Para resolver isso tem duas soluções: 1 usar essa pagina como dynamic la no page de perdeu. A segunda solução é criar o valor da url dentro de um estado reativo
  return (
    <form action={action} className={styles.form}>
      <RootInput
        labelProps={{ label: 'Email / Usuário' }}
        inputProps={{
          name: 'login',
          placeholder: 'Digite seu Email / Usuário',
          type: 'text',
        }}
      />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage message={state.error} />
      <SuccessMessage state={state}>Um email foi enviado!</SuccessMessage>
    </form>
  )
}
