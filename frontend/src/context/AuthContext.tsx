import React, { createContext } from 'react'

import {INotification, useNotification}from '../hooks/useNotification'
import { User, useUser } from '../hooks/useUser'

interface AuthContext {
  user: User | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
  notification: INotification | null
  showNotification: (notification: INotification) => void
}
export const AuthContext = createContext({} as AuthContext)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated, login, logout } = useUser()
  const { notification, showNotification } = useNotification()

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        notification,
        showNotification
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
