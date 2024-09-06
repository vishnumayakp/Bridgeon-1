import React, { useRef } from 'react'

function Focus() {
    const addFocus=useRef(null)
    const onFocus=()=>{
        addFocus.current.focus()
    }
  return (
    <div>
      <input ref={addFocus} type="text" />
      <button onClick={onFocus}>Focus</button>
    </div>
  )
}

export default Focus
