import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import SinglePost from '../../components/SinglePost';
import Category from '../../components/Category';

export async function getServerSideProps(context) {

  const { params } = context;
  const {slug} = params;
   
    const https = require("https");
    const myUrl = `https://localhost:7277/api/Products/Category/${slug}`;    
    const agent = new https.Agent({rejectUnauthorized: false})
    const productsRes = await fetch(myUrl, { agent });
    const productsData = await productsRes.json();
    const categoriesRes = await fetch('https://localhost:7277/api/Categories', { agent });
    const categoriesData = await categoriesRes.json();
  
    return{
      props: {
       productsData,
       categoriesData
      },
    };
  }

export default function CategoryScreen({productsData, categoriesData}) {

    const allProducts = productsData.map((p) => (<div key = {p.id}><SinglePost 
      title = {p.title}  
      desc = {p.description}
      id = {p.id}
      image = {p.image}
      price = {p.price}
      stock = {p.stock}
      category = {p.category}/>
      </div>));

const allCategories = categoriesData.map((c) => (
  <div key = {c.id}>
    <Category
      name = {c.name}  
      id = {c.id}/>
  </div>));



    return (       
      <Layout title="Home Page">
      <div className='flex flex-row w-full justify-around mb-3'>{allCategories}</div>
      
      <hr  class="border-1 border-blue-700 mb-5"></hr>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>              
        {allProducts}    
        </div>
      </Layout>
    )
}
