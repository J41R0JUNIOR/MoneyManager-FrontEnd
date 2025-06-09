import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './utils/index.css'
import SignIn from './pages/SignIn'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignIn />
  </StrictMode>,
)
