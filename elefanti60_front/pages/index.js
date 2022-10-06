import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import Posts from './posts';
import ProductItem from '../components/ProductItem';
import styles from '../styles/Home.module.css'
import data from '../utils/data.js'
import Products from '../components/Products';
import SinglePost from '../components/SinglePost';

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


export default function Home({productsData}) {

  const allProducts = productsData.map((p) => (<div key = {p.id}><SinglePost 
    title = {p.title}  
    desc = {p.description}
    id = {p.id}
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