import './styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Input } from "antd"
import { memo, useContext, useRef, useState } from 'react'
import { Button } from "antd"
import { AuthContext } from '../../context/AuthContext'
import * as auth from '../../services/auth'

const Login = memo(function Login() {
  const [credentials, setCredentials] = useState<{ username: string; password: string }>({
    username: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useContext(AuthContext)
  const abortControllerRef = useRef<AbortController>()

  const abortAuth = () => {
    setLoading(false)
    abortControllerRef.current?.abort()
  }

  const handleLogin = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    const newAbortController = new AbortController()
    abortControllerRef.current = newAbortController
    setLoading(true)
    auth
      .login({ ...credentials, signal: newAbortController.signal })
      .then((res: any) => {
        if (res?.statusCode === -1) {
          setMessage(res?.message)
          setLoading(false)
          return
        }
        if (res?.statusCode === 401) {
          setMessage(res?.message)
          setLoading(false)
          return
        }
        if (res?.statusCode === 500) {
          const errorMsg = 'We have problem with authenticate user'
          setMessage(errorMsg)
          setLoading(false)
          return
        }
        if (res?.statusCode === 503) {
          const errorMsg ='We have problem with authenticate user'+ '. ' + res?.message
          setMessage(errorMsg)
          setLoading(false)
          return
        }
        login(res.accessToken)
      })
      .catch(er => {
        const errorMsg = 'We have problem with authenticate user'
        setMessage(errorMsg)
        setLoading(false)
        console.error(er)
      })
  }

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }
  const onInputChange = (e: any) => {
    if (e.target.value) setCredentials({ ...credentials, [e.nativeEvent.target.name]: e.target.value.toString() })
  }

  return (
    <div className="login">
      {/* <div className="login-background"></div> */}
      {/* <img className="login-logo"  alt="logo" /> */}
      <div className="login-form">
        <div className="login-form-title">{'Welcome'}</div>
        {/* <div className="login-form-subtitle">{t('LogIn into your account')}</div> */}
        <Input
          className="login-form-input"
          name="username"
          placeholder={'username'}
          type="text"
          onChange={onInputChange}
        />
        <Input
          className="login-form-input"
          name="password"
          placeholder={'password'}
          type="password"
          onKeyUp={onKeyPress}
          onChange={onInputChange}
        />
  
        {!loading && (
          <Button  onClick={handleLogin}>
            {'login'}
          </Button>
        )}
        {loading && (
          <Button  onClick={abortAuth}>
            <FontAwesomeIcon icon="spinner" spin /> {'cancel'}
          </Button>
        )}
      </div>

      <div className="login-message">{message}</div>
    </div>
  )
})

export default Login
