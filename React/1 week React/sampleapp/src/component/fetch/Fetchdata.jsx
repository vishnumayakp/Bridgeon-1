import React, { useEffect, useState } from 'react'

function Fetchdata() {
    const [text,setText]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then(Response=>Response.json())
        .then(data=>setText(data.quotes))
    },[])
  return (
    <div>
      {/* {text.map((value,index)=>{
        if(index<9){
            return <h4>{value.quote}</h4>
        }
      })} */}
      {text.map((value,index)=>{
        return <table style={{border:"1px solid", width:'500px', borderCollapse:'collapse'}}>
          <tr>
            <th style={{border:"1px solid", borderCollapse:'collapse'}}>{index}</th>
            <th style={{border:"1px solid",borderCollapse:'collapse'}}>Data</th>
          </tr>
          <tr>
            <td style={{border:"1px solid",borderCollapse:'collapse'}} key={value}>{value.id}</td>
            <td style={{border:"1px solid",borderCollapse:'collapse'}} key={value}>{value.quote}</td>
          </tr>

        </table>
      })}
    </div>
  )
}

export default Fetchdata
