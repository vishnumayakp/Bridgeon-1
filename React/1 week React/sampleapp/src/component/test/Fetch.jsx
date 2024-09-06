import React, { useEffect, useState } from 'react'

function Fetch() {
    const [state,setState]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>setState(data))
    })
  return (
    <div>
        {state.map((value,index)=>{
            return <h1>{value.name}</h1>
        })}
    </div>
  )
}

export default Fetch
