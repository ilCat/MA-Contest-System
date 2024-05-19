import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLocalStorage } from './useLocalStorage'

export type User = {
  id: number
  name: string
  username: string
  memberOf: string[]
  iat: number
  exp: number
}

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  const { setItem, removeItem, getItem } = useLocalStorage()

  // const parseMemberOf = (memberOf: string[]) => {
  //   return memberOf?.map(item => {
  //     return item.substring(item.indexOf('CN=') + 3, item.indexOf(','))
  //   })
  // }

  useEffect(() => {
    const usertoken = getItem('token')
    if (usertoken) {
      // const user: User = jwtDecode(usertoken)
      // user.memberOf = parseMemberOf(user.memberOf)
      setUser(user)
      setIsAuthenticated(true)
      navigate('/app')
    } else {
      navigate('/app/login')
    }
  }, [])

  const login = (token: string) => {
    // const user: User = jwtDecode(token)
    // user.memberOf = parseMemberOf(user.memberOf)
    setUser(user)
    setIsAuthenticated(true)
    setItem('token', token)
    navigate('/app')
  }

  const logout = () => {
    setUser(null)
    removeItem('token')
    setIsAuthenticated(false)
    navigate('/app/login')
  }
  return { user, isAuthenticated, setUser, login, logout }
}
