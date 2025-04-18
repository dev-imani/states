import React from 'react'
import { useState } from 'react';

function App() {
  return (
<>
<h1>I am Imani Michael</h1>
      <FavoriteColor/>
</>
      

  )
}

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1 style={{color:"red"}}>My favorite color is {color}!</h1>
}

export default App
