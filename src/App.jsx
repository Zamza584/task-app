import './App.css'
import Admin from './Admin';
import Home from './Home';
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
