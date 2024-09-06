import React, { useEffect, useState } from 'react'

function FetchDatas() {
    const [state,setState]=useState([])
   useEffect(()=>{
    fetch('https://api.postalpincode.in/pincode/110001')
    .then(res=>res.json())
    .then(data=>setState(data[0].PostOffice))
    .catch((error)=>console.log(error))
   })
  return (
    <div>
        <table>
            <tr>
                <th>name</th>
                <th>District</th>
                <th>Pincode</th>
            </tr> 
      {
        state.map((value,index)=>{
           return  <tr>
                <td>{value.Name}</td>
                <td>{value.District}</td>
                <td>{value.Pincode}</td>
            </tr>
            
        })
      }
       </table>
    </div>
  )
}

export default FetchDatas
