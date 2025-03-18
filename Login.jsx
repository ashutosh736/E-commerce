
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { signup } from './firebase.jsx'
import './Login.css'

export default function Login() {

   const [data,setData]=useState(false)

    const emailref=useRef()
    const passwordref=useRef()

   async function mySignup() {
    setData(true)
    await signup(emailref.current.value,passwordref.current.value)
    setData(false)
    alert("signup is sucessful..")
   }




    const navigate=useNavigate()
    const backloginhere=()=>{
        navigate('/log1')
    }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' ref={emailref} />
          <input type="password" placeholder='Password' ref={passwordref}/>
        </div>
        <button onClick={mySignup}>Continue</button>
        <p className="loginsignup-login">Already have an account? <span onClick={backloginhere}><Link to={'/log1'}>Login here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}