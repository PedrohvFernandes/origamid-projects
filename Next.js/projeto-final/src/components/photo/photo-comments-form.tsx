'use client'

import { Comment } from '@/actions/photo-get'
import styles from './photo-comments-form.module.css'
import { EnviarIcon } from '@/icons'
import { FormButton } from '../forms/form-button'
import { ErrorMessage } from '../helper/error-message'
import { useFormState } from 'react-dom'
import { commentPost } from '@/actions/comment-post'
import React from 'react'

type PhotoCommentsFormProps = {
  single?: boolean
  id: number
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>
}

export function PhotoCommentsForm({
  single,
  id,
  setComments,
}: PhotoCommentsFormProps) {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: '',
  })

  React.useEffect(() => {
    if (state.ok && state.data) {
      setComments((prev) => [...prev, state.data])
      setComment('')
    }
  }, [state, setComments])

  const [comment, setComment] = React.useState('')

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      action={action}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton className={styles.button}>
        <EnviarIcon />
      </FormButton>
      <ErrorMessage message={state.error} />
    </form>
  )
}
