import React from 'react'
import Component2 from './Component2'

function Component1({data}) {
    console.log(data);
    
  return (
    <div>
      <Component2 data={data}/>
    </div>
  )
}

export default Component1
