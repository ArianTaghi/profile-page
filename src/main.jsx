import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'devicon/devicon.min.css'
import './index.scss'
import App from './App.jsx'
import Weblog from './components/Weblog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/weblog" element={<Weblog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
