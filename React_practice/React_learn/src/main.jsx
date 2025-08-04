import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User from './User.jsx'
import UseStateObj from './useStateObj.jsx'
import Array from './Array.jsx'
import Input from './Input.jsx'
import UseEffectCount from './UseEffectCount.jsx'
import UseRef from './useRef.jsx'
import UseRefCount from './UseRefCount.jsx'
import ContentChange from './ContentChange.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContentChange />
  </StrictMode>,
)
