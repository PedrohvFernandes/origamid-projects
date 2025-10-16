import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Aqui você pode adicionar outras configurações do Next.js, se necessário
  // Nesse caso da images, estamos permitindo imagens de um domínio externo. Que você confia nessa fonte de imagens, porque como tudo é baixado no servidor, se você permitir qualquer domínio, pode ser um risco de segurança.
  images: {
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Padrão do next
    // Funciona assim: Se no componente Image definimos o size 100vw e  a tela do navegador for 900x ele carrega a imagem de 1200px, se for 500px ele carrega a de 640px. Se a imagem for maior que 3840px ele carrega a de 3840px. Nao quer dizes que em uma tela de 900px ele vai carregar a imagem do tamanho de 1200 ultrapassando a tela, na verdade ele carrega a imagem de 1200px e adapta a mesma para se encaixar na tela de 900px, mantendo a qualidade. Ou seja a imagem esta sempre acima do tamanho da tela, nunca abaixo, para não perder qualidade ou distorcer a imagem. Ou seja, ele carrega a imagem por exemplo 1200px, mas com o tamanho real de 900px. E detalhe isso muda tambem com base na densidade de pixels da tela do dispositivo, se for por exemplo 4k ele carrega a imagem maior, por exemplo 1000px te largura, seria 2000px de largura, porque 4k é x2 de densidade. Com isso ele carregaria uma imagem de 2400px para uma tela de 1000px, mantendo a qualidade.

    //  E isso funciona hora que a pessoa entra no site, ou seja, se a pessoa entrar com o celular, ele ja carrega a imagem menor, se entrar com o desktop ele carrega a maior. Isso é definido pelo sizes que você passa na tag Image. Da para fazer uma função de resize personalizada, mas na maioria dos casos não é necessário.
    // Lembrando que o next nao vai fazer upscale nas imagens como nos aplicativos de edição/IA
    deviceSizes: [600, 800, 1200, 2400, 3600], // Padrão do next
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.origamid.online',
        port: '',
        // ** indica que pode ter qualquer coisa depois de /imagens/, ex: /imagens/1.jpg, /imagens/qualquer/coisa/2.png
        pathname: '/imagens/**',
      },
    ],
  },
}

export default nextConfig
