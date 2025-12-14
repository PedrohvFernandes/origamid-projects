'use client'

import { logout } from '@/actions/logout'
import validateToken from '@/actions/validate-token'
import { User } from '@/types/user'
import React from 'react'

type IUserContext = {
  user: User | null
  setUserState: React.Dispatch<React.SetStateAction<User | null>>
}

const UserContext = React.createContext<IUserContext | null>(null)

export const useUser = () => {
  const context = React.useContext(UserContext)
  if (context === null) {
    throw new Error('useUser must be used within a UserContextProvider')
  }
  return context
}

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode
  user: User | null
}) {
  const [userState, setUserState] = React.useState<User | null>(user)

  React.useEffect(() => {
    async function validate() {
      const { ok } = await validateToken()
      if (!ok) await logout()
    }
    if (userState) validate()
  }, [userState])

  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  )
}
