 import './App.css';
import { useState } from "react"
import Contentt from './Contentt';
import React from "react";

function App() {
  const[show,isShow]=useState(false)
  return(
    <div>
      <button onClick={()=>isShow(!show)}> click</button>
      {show&& <Contentt/> }
    </div>
  )
}


export default App;
