import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    return (
    <div className='login'>
        <div className='box'>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button onClick={()=>{navigate('/home')}} >Login</button>
        </div>
    </div>
    )
}

export default Login

