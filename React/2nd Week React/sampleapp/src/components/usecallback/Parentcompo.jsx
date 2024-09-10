import React, { useCallback, useState } from 'react'
import Title from './Title'
import Counter from './Counter'
import Button from './Button'

function Parentcompo() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(5)

    const incrementCoun1=useCallback(()=>{
        setCount1(count1+1)
    },[count1]) 

    const incrementCoun2=useCallback(()=>{
        setCount2(count2+1)
    },[count2])

  return (
    <div>
      <Title/> <br />
      <Counter text="Counter1" count={count1}/>
      <Button handleclick={incrementCoun1}>Increment Counter1</Button>
      <Counter text="Counter2" count={count2}/>
      <Button handleclick={incrementCoun2}>Increment Counter2</Button>
    </div>
  )
}
  
export default React.memo(Parentcompo)
