import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getDataInfo=createAsyncThunk('api/data',()=>{
    return axios.get('http://localhost:5000/products')
    .then((res)=>{
        return res.data
    })
})



const dataInfoSlice=createSlice({
    name:'data',
    initialState:0,
    extraReducers:{
        [getDataInfo.fulfilled]:()=>{

        },
        [getDataInfo.pending]:()=>{

        },
        [getDataInfo.rejected]:()=>{

        }
    }
})
export default dataInfoSlice.reducer;