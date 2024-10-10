import {configureStore} from '@reduxjs/toolkit'
import toDoSlice from './toDoSlice'

 const store=configureStore({
    reducer:{
        todos:toDoSlice
    }
})

export default store