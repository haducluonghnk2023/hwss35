import React from 'react'

export default function hw1() {
    const [name,setName] = React.useState<string>("ha duc luong")
  return (
    <div>
        <h2>hw1</h2>
        <p>{name}</p>
    </div>
  )
}
