import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getDataInfo=createAsyncThunk('api/data',async ()=>{
   const res= await axios.get('http://localhost:5000/products')
   return res.data
})

const dataInfoSlice=createSlice({
    name:'dataInfo',
    initialState:{
        data:[],
        error:'',
        loading:false
    },
    extraReducers: (builder) =>{
        builder
            .addCase(getDataInfo.pending, (state)=>{
                console.log('pending actions dispatched');
                state.loading=true;
            })

            .addCase(getDataInfo.fulfilled, (state,action)=>{
                console.log('fullfill actions dispatched');
                state.loading=false
                state.data=action.payload
            })

            .addCase(getDataInfo.rejected,(state,action)=>{
                console.log('rejected error dispatched');
                
                state.loading=false
                state.data='some error Occured'
            })
    }
})
export default dataInfoSlice.reducer;