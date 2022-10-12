import React, { useRef } from 'react'
import Layout from '../components/Layout';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'
import Link from 'next/link';
// export async function getServerSideProps(){
//   return{
//     props: {

//     }
//   }
// }

export default function SignUpScreen() {
  const name = useRef()
  const lastname = useRef()
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const adress = useRef()
  const cardnumber = useRef()


  const handleClick = () => {
    if (name.current.value && lastname.current.value && username.current.value && email.current.value && password.current.value && adress.current.value && cardnumber.current.value) {
      localStorage.setItem('name', name.current.value)
      localStorage.setItem('lastname', lastname.current.value)
      localStorage.setItem('username', username.current.value)
      localStorage.setItem('email', email.current.value)
      localStorage.setItem('password', password.current.value)
      localStorage.setItem('adress', adress.current.value)
      localStorage.setItem('cardnumber', cardnumber.current.value)

      localStorage.setItem('signUp', email.current.value)
      alert('Account created sucessfully')

      console.log(name, lastname, username, email, password, adress, cardnumber)
    }
  }

  const handleSubmit = async (event) => {
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
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)

  }


  const newLocal = '/login';
  return (
    <Layout title="Sign Up" >
      
      <div className='flex justify-center mb-10'>
      <div class="p-4 w-1000 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8">
        <form class="space-y-6" action="#">
          <Image src={logo} className="w-" />
          <div class="relative z-0 mb-6 w-full group">
            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 mb-6 w-full group">
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Card number</label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
            </div>
          </div>
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?              
              <Link href="/login"> 
                <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Log in</a>
              </Link>
          </div>
        </form>
      </div>
      </div>

      {/* 
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
      </form> */}
    </Layout>
  )
}
