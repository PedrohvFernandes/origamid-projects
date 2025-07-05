// Eu poderia utilizar esse componente dentro de qualquer outra pagina, caso fosse um menu específico daquela rota, ou layout de uma determinada rota, e até mesmo dentro do layout global da aplicação, como um menu de navegação principal.

import Link from 'next/link'

export function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          {/* 
            O link contem uma propriedade chamada prefetch, que é uma propriedade que permite que o Next.js faça o pré-carregamento da página para a qual o link aponta. Se você passar o valor false, o Next.js não fará o pré-carregamento da página. So que o prefetch so funciona em ambientes de produção, ou seja, quando você estiver rodando a aplicação com o comando next start ou deploy em produção.

            O prefetch puxa qualquer informação possivel de tal pagina/rota, com isso, não tem atrasos
          */}
          <Link href="/">Home</Link>
        </li>
        <li style={{ display: 'flex', gap: '1rem' }}>
          {/* 
            Outra coisa que o link tem é a propriedade scroll, que é uma propriedade que permite que o Next.js faça o scroll para o elemento com o id. Se você passar o valor false, o Next.js não fará o scroll para o elemento com o id especificado no link.

            o # é um id de um elemento na página, e o Next.js vai fazer o scroll para esse elemento quando você clicar no link. Isso é útil quando você tem uma página longa e quer que o usuário seja levado para uma seção específica da página.
          */}
          <Link href="/sobre#teste" scroll={false}>
            Sobre #teste scroll false
          </Link>
          <Link href="/sobre#teste">Sobre #teste</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}
