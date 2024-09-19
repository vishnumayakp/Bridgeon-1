import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child';

function Parent() {
    console.log('parent');
    const [count,setCount]=useState(0)
    const a=useCallback(()=>{
        return 10
    },[])

  return (
    <div>
      <Child data={a}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Parent
