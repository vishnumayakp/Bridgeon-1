import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import getDataInfo from '../Redux/api'

function Home() {
    // const [product,setProduct]=useState([])
    const data= useSelector(state=>(state.dataInfo.data))
    const loading =useSelector(state=>state.dataInfo.loading)
    const error=useSelector(state=>state.dataInfo.error)
    const dispatch=useDispatch()

    useEffect(()=>{
      //  axios.get('http://localhost:5000/products')
      //  .then((res)=>setProduct(res.data))
      // getDataInfo(dispatch)
      dispatch(getDataInfo())
    },[])
  return (
      <div>
         {loading && <div style={{backgroundColor:'green'}}>Loading......</div> }
         {error && <div  style={{backgroundColor:'red'}}>{error}</div>}
          <div className='flex flex-wrap w-[100%]  justify-center gap-10 h-[25rem] mt-5'>
          <div className=' h-[30rem] w-[25rem] sm:h-[24rem] sm:w-[18rem] md:h-[20rem] lg:w-[15rem] md:w-[16em] flex flex-col items-start'>
      {data.map((value)=>{
        return(
            <>
        <div  className='bg-gray-200 '><img style={{width:'60px'}} src={value.image} alt="" /><button >Delete</button> <br /></div>
  
        <div className='flex flex-col items-start'><span>{value.name}</span>
        <span className='font-bold'>₹ {value.price}</span> <br />
        </div>
        </>
     
  
        )
      })}
        </div>
    </div>
    </div>
  )
}

export default Home
