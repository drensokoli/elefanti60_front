import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import Posts from './posts';
import ProductItem from '../components/ProductItem';
import styles from '../styles/Home.module.css'
import data from '../utils/data.js'
import Products from '../components/Products';
import SinglePost from '../components/SinglePost';
import Category from '../components/Category';

export const getServerSideProps = async () => {
   
  const https = require("https"); 
  const agent = new https.Agent({rejectUnauthorized: false})
  const productsRes = await fetch('https:/localhost:7277/api/products/', { agent });
  const productsData = await productsRes.json();
  const categoriesRes = await fetch('https://localhost:7277/api/Categories', { agent });
  const categoriesData = await categoriesRes.json();
 

  return{
    props: {
     productsData,
     categoriesData,
    },
  };
}


export default function Home({productsData, categoriesData}) {

  const allProducts = productsData.map((p) => (<div key = {p.id}><SinglePost 
    title = {p.title}  
    desc = {p.description}
    id = {p.id}
    price = {p.price}
    stock = {p.stock}
    category = {p.category}/>
    </div>));

const allCategories = categoriesData.map((c) => (<div key = {c.id}><Category
  name = {c.name}  
  id = {c.id}/>
  </div>));

    //console.log(categoriesData,"hello");

  return (
      <Layout title="Home Page">
        <div className='flex flex-row w-full justify-around mb-3'>{allCategories}</div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        <div className='flex-row'>        
        <div className='w-full'>{allProducts}</div></div>     
        </div>
      </Layout>
  )
}