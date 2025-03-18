import React from 'react'
import './Loginhere.css'
import {signin} from './firebase.jsx'
import { useState,useRef } from 'react'


export default function Loginhere() {


  const [data,setData]=useState(false)
  
      const emailref=useRef()
      const passwordref=useRef()
  
     async function mySignin() {
      setData(true)
      await signin(emailref.current.value,passwordref.current.value)
      setData(false)
      alert("Login is sucessful")
     }

  return (
          
            <div className='border'>
         <h1 className='head'>Sign In</h1>
        <div className='box'>
          <input type="email" placeholder='Email Address' ref={emailref} /> <br/> <br />
          <input type="password" placeholder='Password' ref={passwordref}/> <br />
        </div><br />
        <button onClick={mySignin}>Continue</button>
    </div>
          

  )
}
