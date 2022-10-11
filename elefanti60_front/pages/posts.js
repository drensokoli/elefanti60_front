import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SinglePost from '../components/SinglePost';
import Link from 'next/link'
import React from 'react'

export const getServerSideProps = async () => {
   
  const https = require("https");
  const myUrl = 'https:/localhost:7277/api/products/';
  const agent = new https.Agent({rejectUnauthorized: false})
  const productsRes = await fetch('https:/localhost:7277/api/products/', { agent });
  const productsData = await productsRes.json();
  console.log(productsData);

  return{
    props: {
     productsData,
    },
  };
}

export default function Posts({ productsData }) {
  
  const allProducts = productsData.map((p) => (<div key = {p.id}><SinglePost 
    title = {p.title}  
    desc = {p.description}
    id = {p.id}
    price = {p.price}
    stock = {p.stock}
    category = {p.category}/>
    </div>));

  return (
    {allProducts}
  )
}


