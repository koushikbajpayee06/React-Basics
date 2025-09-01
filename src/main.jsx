import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './components/login/login.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { NetflixIndex } from './components/netflix/netflix-index.jsx'
import { DataBinding } from './components/databinding/databinding.jsx'
import { DataBinding1 } from './components/data-binding/data-binding.jsx'

createRoot(document.getElementById('root')).render(
  
    <DataBinding1 />
 
)
