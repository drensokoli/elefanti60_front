import React from 'react'
import Head from 'next/head'

export default function Title(title) {
  return (
    <Head>
    <title>{title ? title + ' - Elefanti 60' : 'Elefanti 60'}</title>
    <meta name="description" content="Ecommerce website" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
