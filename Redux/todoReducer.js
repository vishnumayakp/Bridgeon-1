import { createSlice } from "@reduxjs/toolkit"
const initialState={
    list:[]
}

const todoReducer=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.list.push({id:Date.now(),text:action.payload})
        },
        deleteTodo:(state,action)=>{
            state.list=state.list.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,newText}=action.payload;
            const todo = state.list.find((todo)=>todo.id === id)
            if(todo){
                todo.text=newText;
            }
        }
    }
})

export const{addTodo,deleteTodo,updateTodo}=todoReducer.actions;
export default todoReducer.reducer;