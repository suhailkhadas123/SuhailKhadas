import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GithubUserProvider} from './Components/Api/UserDetailApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GithubUserProvider>
      <App />
    </GithubUserProvider>
  </StrictMode>,
)
