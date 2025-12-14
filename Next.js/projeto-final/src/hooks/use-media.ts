import React from 'react'

// Esse hook verifica se a mídia query passada bate com o tamanho da tela. Verifica o tamanho da tela em tempo real.
const useMedia = (media: string) => {
  const [match, setMatch] = React.useState<boolean>(false)

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return match
}

export default useMedia
