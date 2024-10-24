import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchComments =  createAsyncThunk('comments/fetchComments',async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    return response.data
});

const commentSlice=createSlice({
    name:'comments',
    initialState:{
        comments:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchComments.pending, (state)=>{
                state.loading= true
                state.error=null
            })

            .addCase(fetchComments.fulfilled, (state,action)=>{
                state.loading=false
                state.comments=action.payload
            })

            .addCase(fetchComments.rejected, (state,action)=>{
                state.loading=true
                state.error=action.error.message
            })
    }
})

export default commentSlice.reducer;

