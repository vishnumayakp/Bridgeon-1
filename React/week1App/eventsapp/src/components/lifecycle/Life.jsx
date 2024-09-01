import React, { useEffect, useState} from 'react'

const Life = () => {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)
    useEffect(()=>{
        console.log("mounting...")
        console.log('Updating...'+count)
        console.log('Updating1...'+count1)

        // return ()=>{
        //     console.log("CleanUp..."+count)
        // }
    },[count,count1])
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>Hi iam a component: {count}</h1>

      <button onClick={()=>setCount1(count1+1)}>Increment</button>
      <h1>Hi iam a component: {count1}</h1>
      
    </div>
  )
}

export default Life
