import React, { useRef, useState} from 'react'

function Useref() {
    const [count1,setCount]=useState(0)
    const btnUrf=useRef(null)
    const change=()=>{
        
    }
   
let count=useRef(0)
    const changeNum=()=>{
        
            setCount((prev)=>prev+1 )
        
        
        // console.log(count1);
        // console.log(count.current);  
        
    //    if(count.current%2===0 || count.current===0){
    //     btnUrf.current.style.backgroundColor="blue";
    // }else{
    //     btnUrf.current.style.backgroundColor="red"
    // }
    }
  return (
    <div>
        <button onClick={change} >Change</button>
        <div ref={btnUrf} style={{width:"100%", height:"300px"}}>
            <h2 >{count1}</h2>
            <button onClick={changeNum}>+</button>
        </div>
    </div>
  )
}

export default Useref
