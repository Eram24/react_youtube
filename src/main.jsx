import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
// import {Practice} from './Practice.jsx'
// import Card,{Header,Footer} from "./components/Series";

import {Series} from "./components/Series"

import Profile from './components/Profile'
import { EventHandling } from './components/EventHandling.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App/> */}
   <EventHandling></EventHandling>
  </StrictMode>,
)
