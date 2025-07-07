'use client'

// Depois da versão 14.2.17 o next não permite usar o dynamic diretamente em page server componentes, ou seja, tive que seperar o width dynamic para transformar ele um componente dinamico. Deixei na pasta next origamid 0203 2.1 com erro para lembrar disso.

// Importando o componente Width de forma dinâmica
// Isso é necessário porque o componente Width usa APIs do browser que não estão disponíveis no servidor durante a renderização inicial. Com isso desabilitamos a pre-renderização desse componente, pois ele depende de interações do usuário que só podem acontecer no browser, como o resize da janela antes da pre renderização.

import dynamic from 'next/dynamic'

// Lembrando que para fazer isso o componente precisar ser um client component e default export
export const Width = dynamic(() => import('@/components/width'), {
  ssr: false, // Desabilitando a pre-renderização desse componente
})
