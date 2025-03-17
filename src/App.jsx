import { useNavigate } from "react-router-dom";
import './App.css'
import Home from "./home";


function App() {
  const history = useNavigate();
  const navigateTo = () => history.push("/home")

  return (
    <>
      
      <h1>hi</h1>
      
      <button onClick={navigateTo} type="button">home</button>
      
    </>
  )
}

export default App
