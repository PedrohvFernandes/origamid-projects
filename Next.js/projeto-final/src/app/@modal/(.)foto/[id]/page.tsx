import photoGet from '@/actions/photo-get'
import { FeedModal } from '@/components/feed/feed-modal'
// import { PhotoContent } from '@/components/photo/photo-content'
import { notFound } from 'next/navigation'

type FotoIdPageProps = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: FotoIdPageProps) {
  const { data } = await photoGet(params.id)

  if (!data) {
    return {
      title: 'Foto não encontrada',
    }
  }

  return {
    title: data.photo.title,
  }
}

// Rota paralela e interceptação de rotas para abrir a foto em um modal sobre o feed(é necessario criar a rota paralela @modal e colocar (.) na rota paralela, tem que criar dois default.tsx, um para o @modal e na raiz do app )
export default async function FotoIdPage({ params }: FotoIdPageProps) {
  const { data } = await photoGet(params.id)

  if (!data) return notFound()

  return (
    // <section className="container mainContainer">
    //   <PhotoContent data={data} single={true} />
    // </section>

    <FeedModal photo={data} />
  )
}
