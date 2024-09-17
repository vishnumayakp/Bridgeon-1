import { createContext, useState } from "react";

export const Blogcontext=createContext()

export function CreatedBlogs({children}){
    const [data,setData]=useState([])
    function addBlog(value){
        setData([...data,value])
    }

    return (
        <Blogcontext.Provider value={{data,addBlog}}>
            {children}
        </Blogcontext.Provider>
    )
}