import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [product,setProduct]=useState([])

    useEffect(()=>{
       axios.get('http://localhost:5000/products')
       .then((res)=>setProduct(res.data))
    })
  return (
    <div>
          <div className='flex flex-wrap w-[100%]  justify-center gap-10 h-[25rem] mt-5'>
          <div className=' h-[30rem] w-[25rem] sm:h-[24rem] sm:w-[18rem] md:h-[20rem] lg:w-[15rem] md:w-[16em] flex flex-col items-start'>
      {product.map((value)=>{
        return(
            <>
        <div className='bg-gray-200 '><img style={{width:'60px'}} src={value.image} alt="" /></div>
        <div className='flex flex-col items-start'><span>{value.name}</span>
        <span className='font-bold'>₹ {value.price}</span>
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
