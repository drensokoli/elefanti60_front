import React from 'react'
import Head from 'next/head'
// import Header from './Header'
import Link from 'next/link'
import { Store } from '../utils/Store'
import { useContext } from 'react'

export default function Layout({title, children}) {

  const {state, dispatch} = useContext(Store);
  const { cart } = state;
  return (
    <>        
        <Head>
            <title>{title ? title + ' - Elefanti60' : 'Elefanti60'}</title>
            <meta name="description" content="Ecommerce website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='flex min-h-screen flex-col justify-between'>

        <header>
    <nav className='flex h-12 items-center justify-between shadow-md px-4'>
       <Link href="/" >
        <a className='text-lg font-bold'>Elefanti60</a>
       </Link>
       
       <div>

        <Link href = "/cart">
          <a className='p-2 '>Cart
          {cart.cartItems.length > 0 && (
            <span className='ml-1 rounded-full bg-violet-600 px-2 py-1 text-xs font-bold text-white'>
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </span>
          )}
          </a>
        </Link>
        <Link href="/login">
          <a className='p-2'>Login</a>
        </Link>
       </div>
    </nav>
    </header>
            <main className='container m-auto mt-4 px-4'>{children}</main>
            <footer className='flex justify-center items-center h-10 shadow-inner'>
            </footer>
        </div>
    </>
  )
}
