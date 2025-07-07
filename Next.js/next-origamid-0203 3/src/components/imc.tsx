// Resultado do professor no video

'use client'

import { useState } from 'react'

export function Imc() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState('')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (peso <= 0 || altura <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.')
    }

    const imc = (peso / (altura * altura)).toFixed(2)

    setResultado(imc)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Calculadora de IMC</h1>
        <p>Insira seu peso e altura para calcular seu IMC.</p>
        <label>
          Peso (em kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Altura (em m):
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(Number(e.target.value))}
          />
        </label>
        <br />
        <button type="submit">Calcular IMC</button>
      </form>

      {Number(resultado) > 0 && (
        <div>
          <h2>Seu IMC é:</h2>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  )
}
