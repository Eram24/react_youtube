import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {Card} from './App.jsx'
// import {Practice} from './Practice.jsx'
// import Card,{Header,Footer} from "./components/Series";

import {Series} from "./components/Series"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Series></Series>
  </StrictMode>,
)
