import React from 'react'
import './Logstyle.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='log-cont'>
      <div className='log-container'>
        <form action="">
            <input type="text" placeholder='Enter Your Name'/> <br />
            <input type="password" placeholder='Enter Email' /><br />

            <Link to='/'><button className='sub-btn'>Submit</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Login
