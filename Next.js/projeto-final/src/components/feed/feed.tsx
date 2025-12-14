'use client'

import photosGet, { Photo } from '@/actions/photos-get'
import { FeedPhotos } from './feed-photos'
import React from 'react'
import { Loading } from '@/components/helper/loading'
import styles from './feed.module.css'

export function Feed({ photos, user }: { photos: Photo[]; user?: 0 | string }) {
  const [photosFeed, setPhotosFeed] = React.useState<Photo[]>(photos)
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(false)
  // Se ainda tem fotos para carregar ou não (infinite scroll). Inicialmente, se tiver menos de 6 fotos, não tem mais o que carregar, então ja remove o infinite scroll
  const [infinite, setInfinite] = React.useState(photos.length < 6)

  const fetching = React.useRef(false)

  // Aqui é para mudar a pagina e buscar mais fotos
  function infiniteScroll() {
    // Basicamente um debounce para evitar múltiplas chamadas. Como funciona: Quando a função é chamada, verifica se já está buscando (fetching.current). Se estiver, retorna imediatamente. Se não estiver, define fetching.current como true, inicia um timeout de 1 segundo para simular o tempo de busca, e após esse tempo, incrementa a página e redefine fetching.current para false, permitindo futuras chamadas.
    if (fetching.current) return
    fetching.current = true
    setLoading(true)
    setTimeout(() => {
      setPage((page) => page + 1)
      fetching.current = false
      setLoading(false)
    }, 1000)
  }

  // Aqui é para buscar as fotos quando a página mudar
  React.useEffect(() => {
    if (page === 1) return
    async function getPagePhotos(page: number) {
      const actionData = await photosGet(
        { page, total: 6, user },
        {
          // Não usar cache para buscar novas fotos. Então as novas fotos sempre serão buscadas do servidor quando eu mudar a página. Somente as fotos iniciais usam cache
          cache: 'no-store',
        },
      )
      if (actionData && actionData.data !== null) {
        const { data } = actionData
        setPhotosFeed((prev) => [...prev, ...data])
        // Se não tiver mais fotos para carregar. Menor que 6 pq é o total de fotos por página
        if (data.length < 6) setInfinite(false)
      }
    }
    getPagePhotos(page)
  }, [page])

  React.useEffect(() => {
    if (!infinite) {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
      return
    }
    // Se o usuário chegar ao final da página e escrolar para baixo, carregar mais fotos
    window.addEventListener('scroll', infiniteScroll)
    window.addEventListener('wheel', infiniteScroll)
    // Caso o componente seja desmontado, remover os event listeners
    return () => {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }
  }, [])

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      <div className={styles.loadingWrapper}>
        {infinite ? (
          loading && <Loading />
        ) : (
          <p> Não há mais fotos para carregar.</p>
        )}
      </div>
    </div>
  )
}
