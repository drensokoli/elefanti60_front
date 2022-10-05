import React from 'react'
import Link from 'next/link'

export default function header() {
  return (
    <header>
    <nav className='flex h-12 items-center justify-between shadow-md px-4'>
       <Link href="/" >
        <a className='text-lg font-bold'>Elefanti 60</a>
       </Link>
       
       <div>

        <Link href = "/cart">
          <a className='p-2'>Cart</a>
        </Link>
        <Link href="/login">
          <a className='p-2'>Login</a>
        </Link>
       </div>
    </nav>
    </header>
  )
} 
