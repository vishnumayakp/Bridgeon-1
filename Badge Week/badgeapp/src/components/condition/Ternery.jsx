import React, { useState } from 'react'

function Ternery() {
    const [data,setData]=useState('')
    const [number,setNumber]=useState(null)
    const [color,setcolor]=useState('white')
    const [change,setChange]=useState(true)

    const handleChange=(e)=>{
        let value=e.target.value
        setData(value)
        console.log(value);
    }
    const handleAdd=(e)=>{
        e.preventDefault();
        let count=Number(data)
        setNumber(count%2===0? 'even':'odd')

    }
    const handleColor=()=>{
        setcolor(prevColor=>(prevColor=='white'? 'black':'white'))
        
    }
    const handleBg=()=>{
        setChange(!change)    
    }
  return (
    <div style={{display:'flex'}}>
        <div>
        <label htmlFor="">Enter Number</label>
      <input onChange={handleChange} value={data} type="number" />
      <button onClick={handleAdd}>Add</button>
      {number&& <h2>{data}:{number}</h2>}
    </div>
    <div style={{width:'200px',height:'200px',backgroundColor:color, marginLeft:'30px',display:'flex',justifyContent:'center', alignItems:'center',marginTop:'20px'}}>
        <button onClick={handleColor}>change</button>
    </div>

    <div style={{width:'200px',height:'200px',backgroundColor:change? 'green':'red', marginLeft:'30px',display:'flex',justifyContent:'center', alignItems:'center',marginTop:'20px'}}>
        <button onClick={handleBg}>change</button>
    </div>
    </div>
  )
}

export default Ternery
