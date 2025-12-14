import React from 'react'
import styles from './input.module.css'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string
}

export function Label({ label, ...props }: Readonly<LabelProps>) {
  return <label {...props}>{label}</label>
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <input {...props} />
}

interface RootInputProps {
  labelProps: LabelProps
  inputProps: InputProps
  error?: string
}

export function RootInput({
  error,
  labelProps,
  inputProps,
}: Readonly<RootInputProps>) {
  const id = inputProps.name ?? 'default-input'

  return (
    <div className={styles.wrapper}>
      <Label className={styles.label} htmlFor={id} {...labelProps} />
      <Input className={styles.input} id={id} {...inputProps} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
