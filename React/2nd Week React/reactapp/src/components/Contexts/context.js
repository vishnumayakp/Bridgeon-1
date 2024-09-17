import { createContext, useState } from "react";

export const Myblog=createContext()

export function  Mycreatedblog({children}){
    const [data,setData]=useState([])
    function addMyBlog(value){
        setData([...data,value])
    }

    return(
        <Myblog.Provider value={{data,addMyBlog}}>
            {children}
        </Myblog.Provider>
    )

}