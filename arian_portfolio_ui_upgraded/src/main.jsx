import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.scss'
import App from './App.jsx'
import Skill from './components/Skill'
import Sample from './components/Sample'
import Weblog from './components/Weblog'
import Contact from './components/Contact'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/weblog" element={<Weblog />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
