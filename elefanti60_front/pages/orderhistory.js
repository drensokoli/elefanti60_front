import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import Products from '../components/Products';
import CartItem from '../components/CartItem';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import { UserInfoScreen } from './userinfo';
import { useRouter } from 'next/router';
import OrderItem from '../components/OrderItem';


export var id;
export const getId = () => {

    if (typeof window === "undefined") {console.log("window undefined")}
    else{console.log("defined")}
    try{
        id = window.localStorage.getItem('id');
        console.log(id, "user");
    }  catch(ex){
        console.log(ex, "error")
    }
    return id;
}

export const getServerSideProps = async () => {
    
    const https = require("https");
    const agent = new https.Agent({ rejectUnauthorized: false })
    const productsRes = await fetch(`https://localhost:7277/api/OrderHistorys/1`, { agent });
    const productsData = await productsRes.json();
    
    
    return {
        props: {
            productsData,
        },
    };
}


export default function Home({ productsData}) {
    
    const router = useRouter();
     async function handleCheckout(event){
        
        event.preventDefault()
        const data = {
            userId: getId()
        }
    
        const jsonData = JSON.stringify(data);
       
        const endpoint = `https://localhost:7277/api/OrderItems/`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonData
        }
        console.log(jsonData, "jsondataaaaaa")
    
        const response = await fetch(endpoint, options);
        console.log(response,"respo")
        router.push("http://localhost:3000/cart")
    }
     const items = productsData.orderedItems;
     const total = productsData.total
     console.log(items,"itemms");
    const allProducts = items.map((p) => (<div key={p.id}>
        <OrderItem
            total = {p.total}
            title={p.title}
            desc={p.description}
            id={p.id}
            image={p.image}
            price={p.price}
            stock={p.stock}
            quantity = { p.quantity}
            category={p.category} 
            date = {p.created}/>
    </div>));


    return (
        <Layout title="Home Page">
            <div className='flex flex-col justify-start gap-8 mt-5'>
                <h1 className="text-3xl text-blue-700 font-semibold">Your past orders:</h1>
                <div className='flex flex-col justify-center items-center gap-5 mb-5'>
                    {allProducts}
                </div>
            <div className='flex flex-col justify-end items-center gap-5 mb-5 '>
                <h1 className='text-2xl font-semibold'>Total: ${total}</h1>
            </div>
            </div>

        </Layout >
    )
}