import './index.css'
import ReactDOM from 'react-dom/client'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter} options={{}}>
      <App />
    </QueryParamProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
