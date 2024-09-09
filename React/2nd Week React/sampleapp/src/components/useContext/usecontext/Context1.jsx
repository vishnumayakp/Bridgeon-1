import React, { createContext, useState } from 'react'
import Context2 from './Context2';
import Context3 from './Context3';


export const userContext=createContext();

function Context1() {
    const [counter,setCounter]=useState(0)
    const arr=[1,2,3,4,5,6]
    const car={
        name:"Vishnumaya",
        age: 20,
        college:"SIAS"
    }

    const fruit='Apple'
  return (
    <div>
      <userContext.Provider value={{counter,setCounter,arr,car,fruit}}>
        <Context2/>
        <Context3/>
      </userContext.Provider>
    </div>
  )
}

export default Context1
