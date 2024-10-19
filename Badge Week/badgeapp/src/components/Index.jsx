import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function Index({data}) { 
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
       {data}
    </div>
  )
}

export default Index
