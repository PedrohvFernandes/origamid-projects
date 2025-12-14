/* eslint-disable camelcase */
import type { Metadata } from 'next'
import './globals.css'
import { type_second } from '../functions/fonts'
import Header from '../components/header'
import Footer from '../components/footer'
import { UserContextProvider } from '@/context/user-context'
import { userGet } from '@/actions/user-get'

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social de cães feita com Next.js',
}

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  const { data: user } = await userGet()

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        {/* 
          Mesmo que o provider de user seja use client e ele esteja envolvendo toda a aplicação, o layout e toda a aplicação continua sendo componente do server. A unica coisa que acontece é que o UserContextProvider é renderizado primeiro no server, mas se eu tiver dentro do contexto algum codigo que dependa do estado do client, só vai ocorrer depois da renderização do servidor.
        */}
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            {/* 
              Rota paralela para modais. Assim eu consigo abrir um modal em cima de qualquer página sem perder o estado dela.
              https://itsankitbhusal.medium.com/next-js-intercepting-routes-a-complete-implementation-guide-2025-what-is-the-intercepting-route-a9571888ac2e

              nextjs-org.translate.goog/docs/app/api-reference/file-conventions/intercepting-routes?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc

              o que define a rota paralela é o arrouba no nome da pasta. No caso aqui é @modal

              Rota paralela + intercepting routes = modal em cima de qualquer página
            */}
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  )
}
