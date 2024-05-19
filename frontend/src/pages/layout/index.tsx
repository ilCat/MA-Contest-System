import './styles.scss'

import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { fetchInterceptor } from '../../interceptors/fetch.interceptor'
import NoData from '../../components/no-data/no-data'
import Menu from './components/menu'
import Notifier from './components/notifier'
import TopBar from './components/top-bar'

const Layout = () => {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    console.log('Starting fetch interceptor')
    // fetchInterceptor()
    setIsReady(true)
  }, [])
  return isReady ? (
    <div className="main">
      <Notifier />
      
      <div className="main-content">
      
        <TopBar />
        <Menu visible={true}></Menu>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <NoData message="Loading"></NoData>
  )
}

export default Layout
