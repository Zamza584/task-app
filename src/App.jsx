import './css/App.css'
import Admin from './pages/Admin';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom"
import Login from './pages/login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
