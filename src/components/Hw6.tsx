import React, { useState } from 'react'

export default function Hw6() {
    const [count,setCount] = useState(0);
    const changeCount = ():void=>{
        setCount((preValue:number)=>preValue +1);
    }
  return (
    <div>
        <h2>Hw6</h2>
        <p>dem:{count}</p>
        <button onClick={changeCount}>change</button>
    </div>
  )
}
