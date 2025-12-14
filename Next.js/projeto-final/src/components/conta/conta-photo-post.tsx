'use client'

import React, { useActionState } from 'react'
import { RootInput } from '../forms/input'
import { ErrorMessage } from '../helper/error-message'
import styles from './conta-photo-post.module.css'
import { FormButton } from '../forms/form-button'
import { photoPost } from '@/actions/photo-post'

export function ContaPhotoPost() {
  const [state, action] = useActionState(photoPost, {
    ok: false,
    error: '',
    data: null,
  })

  const [img, setImg] = React.useState<string>('')

  function handleImgChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      // Ele cria uma URL temporária para o arquivo selecionado. Especificamente um blob URL.
      const objectUrl = URL.createObjectURL(file)
      setImg(objectUrl)
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} className={styles.form}>
        <RootInput
          labelProps={{ label: 'Nome' }}
          inputProps={{
            name: 'nome',
            placeholder: 'Digite seu nome',
            type: 'text',
          }}
        />
        <RootInput
          labelProps={{ label: 'Peso' }}
          inputProps={{
            name: 'peso',
            placeholder: 'Digite seu peso',
            type: 'number',
          }}
        />
        <RootInput
          labelProps={{ label: 'Idade' }}
          inputProps={{
            name: 'idade',
            placeholder: 'Digite sua idade',
            type: 'number',
          }}
        />
        <input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImgChange}
        />
        <ErrorMessage message={state.error} />
        <FormButton loadingText="Enviando">Enviar</FormButton>
      </form>

      <div
        className={styles.preview}
        style={{ backgroundImage: `url(${img})` }}
      />
    </section>
  )
}
