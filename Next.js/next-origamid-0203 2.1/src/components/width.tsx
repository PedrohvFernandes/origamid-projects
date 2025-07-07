// Caso eu precise ter acesso a API web logo na função do componente, sem esperar a hidratação e a pre renderização acontecer. A gente tem que desabilitar a pre-renderização desse componente e carregar ele de forma dinamica.

'use client'

import React from 'react'

export default function Width() {
  const [width, setWidth] = React.useState(document.documentElement.clientWidth)

  React.useEffect(() => {
    function handleResize() {
      // setWidth(window.innerWidth)
      setWidth(document.documentElement.clientWidth)
    }

    handleResize() // Set initial width
    // Adicionando o event listener para o resize da janela
    window.addEventListener('resize', handleResize)

    // Limpando o event listener quando o componente é desmontado
    // Isso é importante para evitar vazamentos de memória e garantir que o listener não seja chamado
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [ativo, setAtivo] = React.useState(false)

  return (
    <div>
      <p
        style={{
          color: ativo ? 'green' : 'red',
          fontSize: ativo ? '2rem' : '1rem',
          transition: 'all 0.3s ease-in-out',
          textAlign: 'center',
        }}
      >
        Essa é a largura da tela: {width}px
      </p>
      <button
        onClick={() =>
          // Eu tenho acesso ao valor do estado anterior(b)
          setAtivo((b) => !b)
        }
      >
        Ativar
      </button>
    </div>
  )
}
