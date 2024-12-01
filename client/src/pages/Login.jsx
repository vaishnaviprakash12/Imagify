import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'

const Login = () => {
    const [state,setState] =useState("Login");
    const {setShowLogin,backendUrl,setUser,setToken}=useContext(AppContext)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    //passing data in api
    const onSubmitHandler=async(e)=>{
       e.preventDefault();
       try {
           if(state=='Login'){
              const {data}=await axios.post(backendUrl+'/api/user/login',{email,password})
              //if data sucessfully posted
              if(data.sucess){
                 //send token
                 setToken(data.token)
                 //setting user
                 setUser(data.user)
                 //store token in localstorage
                 localStorage.setItem('token',data.token)
                 setShowLogin(false)
              }
              else {
                 //using toastify to send login fail in frontned
                 console.log("error in login")
                  toast.error(data.message)
              }
             
           }
            //if state is register user
           else{
            
              const {data}=await axios.post(backendUrl+'/api/user/register',{name,email,password})
              //if data sucessfully posted
              if(data.sucess){
                 //send token
                 setToken(data.token)
                 //setting user
                 setUser(data.user)
                 //store token in localstorage
                 localStorage.setItem('token',data.token)
                 setShowLogin(false)
              }
              else {
                //using toastify to send login fail in frontned
                 toast.error(data.message)
             }
            }
       } catch (error) {
        toast.error(error.message)
       }
    }

    useEffect(()=>{
        document.body.style.overflow='hidden';
        return ()=>{
            document.body.style.overflow='unset'
        }
    },[])
  return (
    <div
    className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'
    >
      <form
      onSubmit={onSubmitHandler}
      
      className='relative bg-white p-10 rounded-xl text-slate-500'
      >
        <h1
        className='text-center text-2xl text-neutral-700 font-medium'
        
        >{state}</h1>
        <p
         className='text-sm'
        
        >Welcome back! Please {state} to continue</p>
        {state !=='Login'&&
          <div className='
        border px-6 py-2 flex items-center gap-2 rounded-full mt-4
        '>
           
            <input type="text" placeholder='Full name ' 
            className='outline-none text-sm'
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
            required/></div>}
        <div className='
        border px-6 py-2 flex items-center gap-2 rounded-full mt-4
        '>
            <img src={
                assets.email_icon
            } alt="" />
            <input type="email" placeholder='Email'
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email} 
            className='outline-none text-sm'
            required/></div>
            <div
            
         className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'

            >
            <img src={assets.lock_icon} alt="" />
            <input 
            className='outline-none text-sm'
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
            type="password" placeholder='Enter your password' required/>
            </div>
          <p
          className='text-sm text-blue-600 my-4'
          >Get started with imagify</p>
      <button
      className='bg-blue-600 w-full text-white py-2 rounded-full'
      >
      {
        state=='Login'? 'Login':'create account'
      }
      </button>
    {
        state=='Login'?<p
    className='mt-5 text-center'
    >
    Don't have an account? <span
    className='text-sm text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}
    >Sign up</span>
    </p>
    :
    <p
    className='mt-5 text-center'
    >
    Already have account? <span
    onClick={()=>setState('Login')}
    className='text-sm text-blue-600 cursor-pointer'
    >Login</span>
    </p>}
      <img src={assets.cross_icon}
      onClick={()=>setShowLogin(false)}
      
      className='absolute top-5 right-5 cursor-pointer'/>
      </form>
    </div>
  )
}

export default Login
