import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/components.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>,
)
