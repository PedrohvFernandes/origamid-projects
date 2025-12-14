import { FormButton } from '../forms/form-button'

export function SuccessMessage({
  state,
  children,
}: Readonly<{ state: { ok: boolean }; children: React.ReactNode }>) {
  return (
    <>
      {state.ok && <p style={{ color: '#4c1' }}>{children}</p>}
      <FormButton>Enviar Email</FormButton>
    </>
  )
}
