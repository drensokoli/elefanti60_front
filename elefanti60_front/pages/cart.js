import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import Products from '../components/Products';
import CartItem from '../components/CartItem';
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

    const allProducts = productsData.map((p) => (<div key={p.id}>
        <CartItem
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
            <div className='flex flex-col justify-start gap-8 mt-5'>
                <h1 className="text-3xl text-blue-700 font-semibold">Your cart:</h1>
                <div className='flex flex-col justify-center items-center gap-5 mb-5'>
                    {allProducts}
                </div>
            <div className='flex flex-col justify-end items-center gap-5 mb-5 '>
                <h1 className='text-2xl font-semibold'>Total: 1000$</h1>
                <button type="button" class="text-white w-[250px] sm:w-[500px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Checkout</button>
            </div>
            </div>

        </Layout >
    )
}