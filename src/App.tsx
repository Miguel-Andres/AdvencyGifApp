import { useState } from 'react'

import './App.css'
import { Gifts } from './components/Gifts'


function App() {
 

  return (
   
   <div className="App">
     <div className="title">
     <h1>Feliz Navidad</h1>
   <h1>Regalos  </h1>
     </div>

     <div className="list-gif">
       <Gifts />
     </div>
   </div>
 
  )
}

export default App
