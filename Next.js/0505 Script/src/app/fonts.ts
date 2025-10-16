/* eslint-disable camelcase */
import { Roboto, DM_Serif_Display } from 'next/font/google'
import localFont from 'next/font/local'

// Aqui voce pode colocar o nome como quer. Tem gente que coloca com o mesmo nome da fonte, tem gente que coloca o estilo da fonte, nesse caso é do corpo da pagina
export const font_body = Roboto({
  subsets: ['latin'], // Subconjunto de caracteres que voce quer carregar. Latin é o mais comum, mas tem outros como cirilico, grego, etc, quem possuem ali caracteres diferentes. Isso ajuda a reduzir o tamanho do arquivo da fonte. Passando latin a gente exclui os outros caracteres de outros idiomas.
  weight: ['400', '700'], // Peso da fonte que voce quer carregar. Pode ser uma string ou um array de strings. Quanto mais pesos voce carregar, maior sera o tamanho do arquivo da fonte. Tem que tomar cuidado para nao carregar muitos pesos, porque isso pode deixar o site lento. O ideal é carregar no maximo 3 pesos diferentes. Aqui nesse caso como estamo se tratando do corpo do texto, o 400 é o normal e o 700 é para negrito.
  style: ['normal', 'italic'], // Estilo da fonte que voce quer carregar. Pode ser uma string ou um array de strings. Quanto mais estilos voce carregar, maior sera o tamanho do arquivo da fonte.
  display: 'swap', // Controla como a fonte é exibida enquanto está sendo carregada. As opções são: auto, block, swap, fallback e optional. O mais recomendado é o swap, que exibe uma fonte alternativa enquanto a fonte personalizada está sendo carregada, evitando o layout shift. Enquanto a fonte carrega é exibida uma fonte padrão do sistema(fonte backup, segunda fonte), e quando a fonte carrega, ela troca automaticamente para a fonte personalizada, que nesse caso é a Roboto.
  // Aqui voce pode passar outras opções como variavel, preload, etc. Veja a documentação para mais detalhes.
  variable: '--font-body', // Aqui voce pode definir uma variavel CSS para a fonte. Isso é útil se voce quiser usar a fonte em outros lugares do seu CSS.
  preload: true, // Por padrão é true. Se voce colocar false, a fonte nao sera carregada automaticamente no head do HTML. Isso pode ser util se voce quiser carregar a fonte de outra maneira.
})

export const font_display = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const font_externa = localFont({
  src: '../fonts/ProtestGuerrilla-Regular.ttf', // Caminho para a fonte local. Pode ser um array de objetos se voce quiser carregar mais de uma fonte.
  variable: '--font-externa',
  display: 'swap',
  weight: '400',
})
