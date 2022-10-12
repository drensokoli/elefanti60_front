import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout';
import Home from '.';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LoginScreen() {
  const username = useRef()
 // const email = useRef()
  const password = useRef()
  const Router = useRouter()

 const handleClick=()=>{
  if(username.current.value&&password.current.value)
  {
    localStorage.setItem('username',username.current.value)
   // localStorage.setItem('email',email.current.value)
    localStorage.setItem('password',password.current.value)    
    //localStorage.setItem('signUp',email.current.value)

 console.log(username,password)
  }}
  
  const handleSubmit = async(event) => {
    event.preventDefault()

    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    const jsonData = JSON.stringify(data);
    //https://localhost:7277/ermira?password=1234567890
    const endpoint = `https://localhost:7277/${event.target.username.value}?password=${event.target.password.value}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData,
    }
    console.log(jsonData,"jsondataaaaaa")
    const response = await fetch(endpoint, options);
    //const result = await response.json();

    try
    {
      const result = await response.json();
      console.log(result);
      localStorage.setItem('id',result)
      Router.push('/')
    }
    catch(ex)
    {
      console.log(ex)
      alert("Wrong username or password");
    }

  }  
 

  return (
    <Layout title="Login" >
       <form onSubmit={handleSubmit}>
          <div className='text-center'>
            <div className= 'mt-24 '>
              <div className='mb-2.5	'>
                <input placeholder='Username' type='text' ref={username} id="username" name='username' />
              </div>
              <div className='mb-2.5'>
                <input  placeholder='Password' type='password' ref={password} id="password" name='password'/>
              </div>
              <button className='h-1/3 w-1/5  bg-violet-600 text-white	rounded-md text-md py-1 px-3' onClick={handleClick}>Log in</button>
            </div>
          </div>
       </form>
    </Layout>
  )
}


{/* <form className='mx-auto max-w-screen-md'>
<h1 className='mb-4 bg-red text-xl'>Login</h1>
<div className='mb- bg-red'>
    <label htmlFor='email'>Email</label>
    <input  type="email" className='w-full' id='email' autofocus>
    </input>
</div>
<div className='mb-4'>
    <label htmlFor='password'>Password</label>
    <input  type="password" className='w-full' id='password' autofocus>
    </input>
</div>
<div className='mb-4'>
  <button className='primary-button'>Login</button>
</div>
<div className='mb-4'>
  Don&apos;t have an account?&nbsp;
  <Link href='signup' >Sign up</Link>
</div>
</form> */}

// className=' h-8 w-1/5 text-lg text-center'
// className='h-8 w-1/5	text-lg text-center'
// className='h-8 w-1/5	text-lg text-center'