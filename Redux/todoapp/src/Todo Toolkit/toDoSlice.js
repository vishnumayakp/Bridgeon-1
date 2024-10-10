import {createSlice} from '@reduxjs/toolkit'

const initialState={
    list:[]
}
const toDoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            state.list.push({id:Date.now(),text:action.payload})
        },
        delTodo:(state,action)=>{
            state.list=state.list.filter((todo)=>todo.id!== action.payload)
        },
        editTodo:(state,action)=>{
            const {id,data}=action.payload
           const upData= state.list.find((value)=>value.id===id)
           if(upData){
            upData.text=data
           }
        }
    }
})
export const {addTodos,delTodo,editTodo}=toDoSlice.actions;
export default toDoSlice.reducer;