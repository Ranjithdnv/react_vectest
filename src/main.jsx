import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CountProvider } from "./context";
createRoot(document.getElementById('root')).render(

 <BrowserRouter>
   <StrictMode>
<CountProvider>
        <App />
         </CountProvider>
  </StrictMode>
  </BrowserRouter>
 

  
  ,
)
