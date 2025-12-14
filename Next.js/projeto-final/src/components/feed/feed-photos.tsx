import { Photo } from '@/actions/photos-get'
import Image from 'next/image'
import Link from 'next/link'
import styles from './feed.module.css'

export function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li className={styles.photo} key={photo.id + i}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={1500}
              height={1500}
              sizes="80vw" // 80vw e nao 100vw porque as imagens não ocupam a tela de ponta a ponta, mas ela são somente quadrados, fotos para feed
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
