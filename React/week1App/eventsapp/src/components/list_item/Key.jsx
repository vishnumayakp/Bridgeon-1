import React, { useState } from 'react'

const products=[
    {id:1,name:'Laptop', brand:'Dell',price: 52000, Qty:1},
    {id:2,name:'Laptop', brand:'Asus',price: 50000, Qty:1},
    {id:3,name:'Laptop', brand:'Lenovo',price: 45000, Qty:1},
    {id:4,name:'Laptop', brand:'HP',price: 56000, Qty:1},
    {id:5,name:'Laptop', brand:'Acer',price: 50000, Qty:1},
    {id:6,name:'Laptop', brand:'Vivo Book',price: 50000, Qty:1}
]
const Key = () => {
    const [items,setItems]=useState(products)
    
    const changeQty=(id)=>{
        const newItem= items.map((item)=>{
            return item.id===id?{...item,Qty:item.Qty+1}:item
        })
        setItems(newItem)
    }
    
  return (
    <div >
      {items.map((product)=>{
        return <div  style={{backgroundColor:'hotpink'}} key={product.id}>
        <h1>{product.name}</h1>
        <h3>{product.brand}</h3>
        <h2>{product.price}</h2>
        <h4>{product.Qty}</h4>
        <button onClick={()=>changeQty(product.id)}>+</button>
        </div>
      })}
    </div>
  )
}

export default Key
