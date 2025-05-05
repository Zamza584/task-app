import './css/App.css'
import Admin from './pages/Admin';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
