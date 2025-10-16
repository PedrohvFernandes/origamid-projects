import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Aqui você pode adicionar outras configurações do Next.js, se necessário
  // Nesse caso da images, estamos permitindo imagens de um domínio externo. Que você confia nessa fonte de imagens, porque como tudo é baixado no servidor, se você permitir qualquer domínio, pode ser um risco de segurança.
  images: {
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
