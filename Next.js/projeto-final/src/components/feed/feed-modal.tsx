'use client'

import { PhotoData } from '@/actions/photo-get'
import { PhotoContent } from '../photo/photo-content'
import styles from './feed-modal.module.css'
import { usePathname, useRouter } from 'next/navigation'

export function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter()
  const pathname = usePathname()

  if (!pathname.includes('foto')) {
    return null
  }

  function handleCloseModal(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      router.back()
    }
  }

  // O single é false porque estamos dentro de um modal no feed, não na página única da foto, ou seja, da pagina singular dele. Quando era na rota direta da foto, o single era true. Como agora é rota paralela e vamos usar o modal para abrir a foto, o single é false.
  return (
    <div className={styles.modal} onClick={handleCloseModal}>
      <PhotoContent data={photo} single={false} />
    </div>
  )
}
