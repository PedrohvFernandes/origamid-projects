export function ErrorMessage({ message }: Readonly<{ message: string }>) {
  if (!message) return null

  return <p style={{ color: '#f31', margin: '1rem 0' }}>{message}</p>
}
