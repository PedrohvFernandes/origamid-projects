'use client'

import { useFormStatus } from 'react-dom'

export default function Button({ children }: { children: React.ReactNode }) {
  const status = useFormStatus()
  return (
    <button type="submit" disabled={status.pending}>
      {children}
    </button>
  )
}
