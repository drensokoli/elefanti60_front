import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SinglePost from '../components/SinglePost';
import Link from 'next/link'
import React from 'react'



export default function Products({ productsData }) {
  
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