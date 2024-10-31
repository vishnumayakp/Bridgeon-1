import React, { useState } from 'react'

function Index() {
    const [number,setNumber] = useState(0)

    function handleChange (e){
        const value=e.target.value
        setNumber(value)
    }

  return (
    <div>
      <input onChange={handleChange} type="number" />
       {
        number%2===0 ? (<h3>even</h3>):(<h3>Odd</h3>)
       }
    </div>
  )
}

export default Index
