import React from 'react'

export default function Hw2() {
    const [product,setProduct] =React.useState({
        id:1,
        name:"coca cola",
        price:10000,
        quantity:5
    })
  return (
    <div>
        <h2>Hw2</h2>
        <th>Thong tin san pham</th>
        <p>Id:{product.id}</p>
        <p>Name:{product.name}</p>
        <p>Price:{product.price}</p>
        <p>Quantity:{product.quantity}</p>
    </div>
  )
}
