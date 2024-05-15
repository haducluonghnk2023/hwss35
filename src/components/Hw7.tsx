import React, { useState } from 'react'

export default function Hw7() {
    const [text,setText] = useState('');
    const handleChange:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e)=>{
        setText(e.target.value)
    }
    const charCount = text.length
  return (
    <div>
        <h2>Hw7</h2>
        <textarea name="" id="" 
        value={text}
        onChange={handleChange}
        ></textarea>
        <p>{charCount}</p>
    </div>
  )
}
