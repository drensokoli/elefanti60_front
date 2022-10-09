import React, { useRef } from 'react'
import Layout from '../components/Layout';

export default function SignUpScreen() {
  const name = useRef()
  const email = useRef()
  const password = useRef()

 const handleClick=()=>{
  if(name.current.value&&email.current.value&&password.current.value)
  {
    localStorage.setItem('name',name.current.value)
    localStorage.setItem('email',email.current.value)
    localStorage.setItem('password',password.current.value)    
    localStorage.setItem('signUp',email.current.value)
    alert('Account created sucessfully')

 console.log(name,email,password)
  }
  

 }

  return (
    <Layout title="Login" >
      <div className='text-center'>
        <div className= 'mt-24 '>
          <div className='mb-2.5	'>
            <input placeholder='Name' type='text' ref={name} />
          </div>
          <div className='mb-2.5	'>
            <input placeholder='Email' type='email' ref={email} />
          </div>
          <div className='mb-2.5'>
            <input placeholder='Password' type='password' ref={password} />
          </div>
          <button className='h-1/3 w-1/5  bg-violet-600 text-white	rounded-md text-md py-1 px-3' onClick={handleClick}>Sign Up</button>
        </div>
      </div>

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