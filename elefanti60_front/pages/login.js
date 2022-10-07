import React from 'react'
import Layout from '../components/Layout';
import Link from 'next/link';

export default function LoginScreen() {
  return (
    <Layout title = "Login">
        <form className='mx-auto max-w-screen-md'>
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
        </form>
    </Layout>
  )
}
