import { createContext, useState } from "react";

export const NoteContext=createContext()

export const NoteProvider=({children})=>{
    const [note,setNote]=useState([])
    const addNote=(title,content)=>{
        setNote([...note,{id:Date.now(),title,content}])
    }

    return (
        <NoteContext.Provider value={{addNote,note}}>
            {children}
        </NoteContext.Provider>
    )
}



