// Nunca transforme a page em um client component. Sempre use server components para páginas. Se tiver que usar algum API web(Apis do react) que são utilizadas diretamente no browser, faça um componente separado e importe-o aqui e o transforme em um client component.

// 'use client'; // Não use isso aqui na page, isso transforma a página em um client component.

import { Width } from '@/components/width'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página Sobre do projeto Next.js da Origamid',
}

export default function SobrePage() {
  return (
    <main>
      <h1>Sobre</h1>
      {/* 
        Componentes servidor permitem eu importar componentes client dentro deles,
        mas não o contrário. Ou seja, não posso importar um componente servidor dentro de um componente client.
      */}
      <Width />
      {/* 
        Isso aqui não pode ser usado em um componente servidor, pois é uma interatividade do usuário que precisa ser feita no browser(onClick).
        Se precisar fazer isso, crie um componente separado e transforme ele em um client component. Ou coloque um 'use client' nesse componente, mas por ser uma page não é recomendado isso, pois transforma a página inteira em um client component, e com isso você perde as vantagens de um server component, como o SEO e a performance.
      */}
      <button onClick={() => console.log('teste')}></button>
    </main>
  )
}
