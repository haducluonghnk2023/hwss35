import React from 'react'

export default function Hw9() {
    const [selectedOption, setSelectedOption] = React.useState<string>("nam")
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value)
    }
  return (
    <div>
        <h2>Hw9</h2>
        <label>
            <input 
                value="nam"
                type="radio"
                checked ={selectedOption === "nam"}
                onChange={handleOptionChange}
                />
                nam
        </label>
        <label>
            <input 
                value="nu"
                type="radio"
                checked ={selectedOption === "nu"}
                onChange={handleOptionChange}
                />
                nu
        </label>
        <label>
            <input 
                value="khac"
                type="radio"
                checked ={selectedOption === "khac"}
                onChange={handleOptionChange}
                 />
                khac
        </label>
        <p>gioi tinh : {selectedOption}</p>
    </div>
  )
}
