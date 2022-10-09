import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import SinglePost from '../../components/SinglePost';

export async function getServerSideProps(context) {

  const { params } = context;
  const {slug} = params;
   
    const https = require("https");
    const myUrl = `https://localhost:7277/api/Products/Category/${slug}`;    
    const agent = new https.Agent({rejectUnauthorized: false})
    const productsRes = await fetch(myUrl, { agent });
    const productsData = await productsRes.json();
  
    return{
      props: {
       productsData,
      },
    };
  }

export default function CategoryScreen({productsData}) {

    const allProducts = productsData.map((p) => (<div key = {p.id}><SinglePost 
      title = {p.title}  
      desc = {p.description}
      id = {p.id}
      image = {p.image}
      price = {p.price}
      stock = {p.stock}
      category = {p.category}/>
      </div>));


    return (       
      <Layout title="Home Page">
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>              
        {allProducts}    
        </div>
      </Layout>
    )
}
