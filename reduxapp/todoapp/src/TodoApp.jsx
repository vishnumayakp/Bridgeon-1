import {createSlice} from '@reduxjs/toolkit'

const initialState={
    list:[]
}

const todoListReducers=createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addTodo
    }
})

