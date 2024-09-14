import React from 'react'
import './Regstyle.css'
import { Link, useNavigate } from 'react-router-dom'

function Registration() {
    const nav=useNavigate()
  return (
    <div className='reg-cont'>
      <div className='sign-container'>
        <form action="">
            <input type="text" placeholder='Enter Your Name'/> <br />
            <input type="email" placeholder='Enter Email' /><br />
            <input type="password" placeholder='Enter Password' />

            <button onClick={()=>nav('/login/hi')} className='log-btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Registration
