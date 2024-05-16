import React from 'react'

export default function Hw4() {
    const [isHidden,setIsHidden] = React.useState<boolean>(false);
    const changeStatus = () =>{
        setIsHidden(!isHidden)
    }
  return (
    <div>
        <h2>Hw4</h2>
        {!isHidden && <p>Tieu de</p>}
        <button onClick={changeStatus}>{isHidden ? "hien" :"an?"}</button>
    </div>
  )
}
