import React from 'react'

export default function Hw3() {
        const [color,setColor] = React.useState('black')
        const changeColor = () => {
            setColor(color === "black" ? "red" : "black")
        }
  return (
    <div>
        <h2>Hw3</h2>
        <p style={{color:color}}>Van ban co mau:{color}</p>
        <button onClick={changeColor}>thay doi mau</button>
    </div>
  )
}
