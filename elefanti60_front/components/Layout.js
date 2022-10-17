import React from 'react'
import Head from 'next/head'
import { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ title, children }) {

  return (
    <>
      <Head>
        <title>{title ? title + ' - Elefanti60' : 'Elefanti60'}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex min-h-screen flex-col justify-between'>

        <header>
          <Navbar />
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>

        <Footer />
      </div>
    </>
  );
}