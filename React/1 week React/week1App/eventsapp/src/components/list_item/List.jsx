import React from 'react'

function List() {
  const arr=['Apple','Banana','Pineapple','Orange','Grapes','Mulberry','Strawberry']
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ];
  return (
    <div>
      
        {arr.map((value,index)=>{
          return <li key={index}>{value}</li>
        })}

        {fruits.map((fruit)=>{
          return <li key={fruit.id}>{fruit.name}</li>
        })}
      
    </div>
  )
}

export default List
