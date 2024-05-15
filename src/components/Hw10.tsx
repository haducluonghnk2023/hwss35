import React from 'react'

export default function Hw10() {
    const [sothich,setSothich] = React.useState<string[]>([])
    const checked = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.checked){
            setSothich([...sothich,e.target.value])
        }else{
            setSothich(sothich.filter(item=>item!==e.target.value))
        }
    }
  return (
    <div>
        <h2>Hw10</h2>
        <p>So thích:[{sothich.length > 0 && sothich.join(", ") }] </p>
        <label> 
            <input
                onChange={checked}
                type="checkbox"
                value="dichoi" />
            dichoi
        </label>
        <label> 
            <input
                onChange={checked}
                type="checkbox"
                value="code" />
            code
        </label>
        <label> 
            <input
                onChange={checked}
                type="checkbox"
                value="diboi" />
            diboi
        </label>
        <label> 
            <input
                onChange={checked}
                type="checkbox"
                value="nhayday" />
            nhayday
        </label>
        <label> 
            <input 
                onChange={checked}
                type="checkbox"
                value="bohuccobot" />
            bohuccobot
        </label>
    </div>
  )
}
