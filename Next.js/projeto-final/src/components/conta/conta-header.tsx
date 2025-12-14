'use client'

import React from 'react'
import { SairIcon, AdicionarIcon, EstatisticasIcon, FeedIcon } from '@/icons'
import styles from './conta-header.module.css'
import useMedia from '@/hooks/use-media'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { logout } from '@/actions/logout'
import { useUser } from '@/context/user-context'

function getTitle(pathname: string) {
  switch (pathname) {
    case '/conta/estatisticas':
      return 'Estatísticas'
    case '/conta/postar':
      return 'Poste Sua Foto'
    default:
      return 'Minha Conta'
  }
}

export function ContaHeader() {
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const pathname = usePathname()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  const { setUserState } = useUser()
  async function handleLogout() {
    await logout()
    // Hard refresh para limpar os dados do usuário da memória - 1 solução
    // window.location.href = '/login'
    // Usar o setUser do contexto para limpar os dados do usuário - 2 solução
    setUserState(null)
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link
          href="/conta"
          passHref
          className={pathname === '/conta' ? 'active' : ''}
        >
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link
          href="/conta/estatisticas"
          passHref
          className={pathname === '/conta/estatisticas' ? 'active' : ''}
        >
          <EstatisticasIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link
          href="/conta/postar"
          passHref
          className={pathname === '/conta/postar' ? 'active' : ''}
        >
          <AdicionarIcon />
          {mobile && 'Adicionar Foto'}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  )
}
