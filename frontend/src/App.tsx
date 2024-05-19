
// import { Provider } from 'react-redux'
import { Route, Routes   } from 'react-router-dom'
// import { store } from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, far)
import { lazy, Suspense } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import './App.scss'



const NoData = lazy(() => import('./components/no-data/no-data'))
const Login = lazy(() => import('./pages/login'))
const Layout = lazy(()=> import('./pages/layout'))
function App() {
  
  return (
    // <Provider store={store}>
    // <AuthContextProvider>
    <>
      <Routes>
        <Route
          path="/app/login"
          element={
            <Suspense fallback={<NoData message="Loading Login..." icon="circle-notch" spin={true} />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/app"
          element={
            <Suspense fallback={<NoData message="Loading Layout..." icon="circle-notch" spin={true} />}>
              <Layout/>
            </Suspense>
          }
        >
          <Route path="*" element={<NoData message="Hmm...this page doesn’t exist." icon="warning" spin={false} />} />
        </Route>
      </Routes>
      </>
    // </AuthContextProvider>
  // </Provider>
  )
}

export default App
