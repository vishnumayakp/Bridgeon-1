import {createSlice} from '@reduxjs/toolkit'

const initialState={
    datas:[]
}
const todoReducer=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.datas.push({id:Date.now(),todos:action.payload})
        },
        delData:(state,action)=>{
            state.datas=state.datas.filter((todo)=>todo.id!==action.payload.id)
        }
    }
})

export {addData,delData} 