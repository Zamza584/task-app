import './css/App.css'
import Admin from './pages/Admin';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios'
import { UserContextProvider } from './context/userContext';
import Dashboard from './pages/Dashboard';

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
