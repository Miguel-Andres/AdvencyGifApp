import { useState } from "react";

import "./App.css";
import Gifts from "./componentes/Gifts";

function App() {
  return (
    <div className="App">
        <h1 style={{marginBottom:"200px" ,color:"red",fontSize:"100px",textAlign:"center"}}>Merry christmas</h1>
      <div className="title">
        <h1>Gifts list : </h1>      
      </div>
     <Gifts/>
     

    </div>
  );
}

export default App;
