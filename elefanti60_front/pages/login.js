import React from 'react'
import Layout from '../components/Layout';

export default function LoginScreen() {
  return (
    <Layout title = "Login">
        <form className='mx-auto max-w-screen-md'>
        <h1 className='mb-4 text-xl'>Login</h1>
        <div className='mb-4'>
            <label htmlFor='email'>Email</label>
            <input  type="email" className='w-full' id='email' autofocus>
            </input>
        </div>
        </form>
    </Layout>
  )
}
