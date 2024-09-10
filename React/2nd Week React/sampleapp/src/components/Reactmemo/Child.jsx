import React from 'react'

function Child() {
    console.log("Child");
    
  return (
    <div>
      <h1>Counter</h1>
    </div>
  )
}
const parentclass=React.memo(Child)
export default parentclass
