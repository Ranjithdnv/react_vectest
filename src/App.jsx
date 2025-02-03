import { useState , useContext ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, HashRouter, Route , Router, Routes} from 'react-router-dom'
import Homepage from './pages/homepage'
import Login from './pages/login/login'
import { CountContext } from './context'
import { Navigate } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [ c ,sc] = useState(JSON.parse(localStorage.getItem("credentials")) || 0)

  useEffect(() => {
    // Get the stored credentials from localStorage
    console.log("useEffect triggered...")
    const storedCredentials = localStorage.getItem("credentials");
    console.log(localStorage.getItem("credentials"))
    console.log("useEffect triggered...")
    // Parse the JSON string back to an object and update state
    if (storedCredentials) {
      console.log("Retrieved from storage:",JSON.parse(storedCredentials))
      setCredentials(JSON.parse(storedCredentials));
    }
  }, []); // Runs only once when the component mounts

  console.log('uuuuuuuuuuuu')
  console.log(c.username_dress)
  console.log('git')

  return (
    <>
    
     <div>
      jjjjjjjjjj
    {/* <HashRouter> */}
    <Routes>
        <Route> 
       
     <Route path="/home"      element={c.username_dress ? <Homepage /> : <Navigate to="/login" />} /> 
     <Route path="/login" element={<Login />} /> 
         </Route>
      </Routes>
    {/* </HashRouter> */}

     </div>
      
    </>
  )
}

export default App
