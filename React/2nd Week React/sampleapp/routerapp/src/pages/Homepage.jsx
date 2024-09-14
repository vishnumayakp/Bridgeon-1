import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <div className='main-cont'>
      <div className='container'>
       <h1>Welcome to our Homepage</h1> 
        <Link to='/details/Abhay'><button className='btn'>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Homepage
