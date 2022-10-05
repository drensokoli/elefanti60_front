import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Link from 'next/link'

export default function Layout({title, children}) {
  return (
    <>        
        <Head>
            <title>{title ? title + ' - Elefanti 60' : 'Elefanti 60'}</title>
            <meta name="description" content="Ecommerce website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='flex min-h-screen flex-col justify-between'>

            <Header></Header>
            <main className='container m-auto mt-4 px-4'>{children}</main>
            <footer className='flex justify-center items-center h-10 shadow-inner'>
            </footer>
        </div>

    </>
  )
}
