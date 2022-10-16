import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
// import Products from '../components/Products';
import SinglePost from '../components/SinglePost';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import { UserInfoScreen } from './userinfo';

export const getServerSideProps = async () => {

  const https = require("https");
  const agent = new https.Agent({ rejectUnauthorized: false })
  const productsRes = await fetch('https:/localhost:7277/api/products/', { agent });
  const productsData = await productsRes.json();
  const categoriesRes = await fetch('https://localhost:7277/api/Categories', { agent });
  const categoriesData = await categoriesRes.json();


  return {
    props: {
      productsData,
      categoriesData,
    },
  };
}


export default function Home({ productsData, categoriesData }) {

  const allProducts = productsData.map((p) => (<div key={p.id}><SinglePost
    title={p.title}
    desc={p.description}
    id={p.id}
    image={p.image}
    price={p.price}
    stock={p.stock}
    category={p.category} />
  </div>));

  const allCategories = categoriesData.map((c) => (
    <div key={c.id}>
      <Category
        name={c.name}
        id={c.id} />
    </div>));


  return (
    <Layout title="Home Page">
      <div className='flex flex-row w-full md:justify-around justify-start mb-3 overflow-x-auto'>{allCategories}</div>
      <hr class="border-1 border-blue-700"></hr>
      <Carousel />
      <div className='flex justify-center  mb-0'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 mb-5'>
          {allProducts}
        </div>
      </div>
    </Layout >
  )
}