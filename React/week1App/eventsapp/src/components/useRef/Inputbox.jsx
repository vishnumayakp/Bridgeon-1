import React, { useRef,useEffect, useState} from 'react'

function Inputbox() {
    const [count,setCount] = useState(0)
    const incrementValue=()=>{
        setCount(prevCount => prevCount+1)
    }
    const value=useRef();
    useEffect(() => {
        value.current.focus();
      }, []);
    const focusBtn=()=>{
        value.current.focus()
    }
  return (
    <div>
      <input ref={value} type="text" />
      <button onClick={focusBtn}>Focus</button>
      <h2>Count: {count}</h2>
      <button onClick={incrementValue}>Add</button>
    </div>
  )
}

export default Inputbox
