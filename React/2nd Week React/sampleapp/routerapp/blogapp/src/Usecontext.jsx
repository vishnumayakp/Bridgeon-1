import { createContext, useState } from "react";

export const BlogContext=createContext()

export const BlogProvider=({children})=>{
    const [blog,setBlog]=useState([])
    const addBlog=(title,body)=>{
        setBlog([...blog,{id:Date.now(),title,body}])
    }

    return (
        <BlogContext.Provider value={{addBlog,blog}}>
            {children}
        </BlogContext.Provider>
    )
}



