import React,{useState} from "react";

const UpdatedComponent =(OriginalComponent)=>{
    function NewComponent(){
        const [Count,setCount]=useState(0)
    const increment =()=>{
        setCount(Count+1)
    }
        return <OriginalComponent count={Count} incrementCount={increment}/>
    }
    return NewComponent
}
export default UpdatedComponent