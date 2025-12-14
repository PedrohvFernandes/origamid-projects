'use client'

import { useFormStatus } from 'react-dom'
import Button from './button'

export function FormButton({
  children,
  loadingText = 'Carregando...',
  className,
}: Readonly<{
  children: React.ReactNode
  loadingText?: string
  className?: string
}>) {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} className={className}>
      {pending ? loadingText : children}
    </Button>
  )
}
