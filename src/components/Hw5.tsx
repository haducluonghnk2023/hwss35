import React, { useState } from 'react'

export default function Hw5() {
    const [inputValue,setInputValue] = useState('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("gia tri da nhap",inputValue);
    }
    
  return (
    <div>
        <h2>Hw5</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder='nhap gia tri'
             />
             <button type='submit'> gui?</button>
             
        </form>
    </div>
  )
}
