import React, { useEffect, useState } from 'react'

function Fetchdata() {
    const [text,setText]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then(response=>response.json())
        .then(data=>setText(data.quotes))

        
    },[])
  return (
    <div>
      {
        text.map((value,index)=>{
            if(index<=9){
                return <h3>{value.quote}</h3>
            }    
        })
      }
    </div>
  )
}

export default Fetchdata
