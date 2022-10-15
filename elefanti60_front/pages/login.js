import React, { useRef } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import logo from '../assets/logo.png'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LoginScreen() {
  const username = useRef()
  // const email = useRef()
  const password = useRef()
  const Router = useRouter()

  // const handleClick = () => {
  //   if (username.current.value && password.current.value) {
  //     localStorage.setItem('username', username.current.value)
  //     // localStorage.setItem('email',email.current.value)
  //     localStorage.setItem('password', password.current.value)
  //     //localStorage.setItem('signUp',email.current.value)

  //     console.log(username, password)
  //   }
  // }

  const handleSubmit = async (event) => {
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
    console.log(jsonData, "jsondataaaaaa")

    const response = await fetch(endpoint, options);
    //const result = await response.json();
    // console.log(result);
    // alert(`Is this your full name: ${result}`)

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


  if (!user) return null
  else 

  return (
    <Layout title="Login">
      <div className=' h-screen'>
        <div className='flex justify-center mt-10'>
          <div class="p-4 w-screen md:w-3/4 lg:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 ">
            <form class="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-center">
                <Image src={logo} />
              </div>
              <div>
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adresa juaj elektronike</label>
                <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Emri i përdoruesit
" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fjalekalimi</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
              </div>
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Me mbaj mend</label>
                </div>
              </div>
              <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Kycu ne llogarine tuaj</button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Nuk jeni te regjistruar? 
                <Link href="/signup">
                  <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Krijo nje llogari</a>
                </Link>
              </div>
            </form>
          </div>

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

  {/* <form onSubmit={handleSubmit}>
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
       </form> */}