import React, { useRef } from 'react'
import Layout from '../components/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUpScreen() {
  const name = useRef()
  const lastname = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const adress = useRef()
  const cardnumber = useRef()
  const Router = useRouter()


 const handleClick=()=>{
  if(name.current.value&&lastname.current.value&&username.current.value&&email.current.value&&password.current.value&&adress.current.value&&cardnumber.current.value)
  {
    localStorage.setItem('name',name.current.value)
    localStorage.setItem('lastname',lastname.current.value)
    localStorage.setItem('username',username.current.value)
    localStorage.setItem('email',email.current.value)
    localStorage.setItem('password',password.current.value)    
    localStorage.setItem('adress',adress.current.value)
    localStorage.setItem('cardnumber',cardnumber.current.value)

    localStorage.setItem('signUp',email.current.value)
    //alert('Account created sucessfully')

 console.log(name,lastname,username,email,password,adress,cardnumber)
  }}

  const handleSubmit = async(event) => {
    event.preventDefault()

    const data = {
      name: event.target.name.value,
      lastName: event.target.lastname.value,
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.email.value,
      address: event.target.address.value,
      cardnumber: event.target.cardnumber.value
    }

    const jsonData = JSON.stringify(data);
    const endpoint = 'https://localhost:7277/api/Users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData,
    }

    const response = await fetch(endpoint, options);
    try
    {
      const result = await response.json();
      console.log(result);
      //alert("Signed up");
      Router.push('http://localhost:3000/login')
    }
    catch(ex)
    {
      console.log(ex)
      alert("That usename is unavailable");
    }

  }  


  return (
    <Layout title="Sign Up" >
      <form onSubmit={handleSubmit}>
        <div className='text-center'>
          <div className= 'mt-24 '>
            <div className='mb-2.5	'>
              <input className=' h-8 w-1/5 text-lg'placeholder='Name' type='text' ref={name} id="name" name='name'/>
            </div>
            <div className='mb-2.5	'>
              <input className=' h-8 w-1/5 text-lg ' placeholder='Last Name' type='text' ref={lastname} id="lastname" name='lastname' />
            </div>
            <div className='mb-2.5'>
              <input className=' h-8 w-1/5 text-lg ' placeholder='Username' type='text' ref={username} id="username" name='username'/>
            </div>
            <div className='mb-2.5 '>
              <input className=' h-8 w-1/5 text-lg ' placeholder='Email' type='email' ref={email} id="email" name='email'/>
            </div>
            <div className='mb-2.5'>
              <input className=' h-8 w-1/5 text-lg' placeholder='Password' type='password' ref={password} id="password" name='password' />
            </div>
            <div className='mb-2.5'>
              <input className=' h-8 w-1/5 text-lg ' placeholder='Adress' type='text' ref={adress} id="address" name='address' />
            </div>
            <div className='mb-2.5'>
              <input className=' h-8 w-1/5 text-lg ' placeholder='Card Number' type="text" pattern="[0-9]*" ref={cardnumber}  id="cardnumber" name='cardnumber'/>
            </div>
            <button className='h-1/3 w-1/5  bg-violet-600 text-white	rounded-md text-md py-1 px-3' onClick={handleClick}>Sign Up</button>
          </div>
        </div>
      </form>
    </Layout>
  )
}
