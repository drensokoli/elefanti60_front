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
import { useEffect, useState } from 'react';


// export var id;
// export const getId = () => {

//     if (typeof window === "undefined") {console.log("window undefined")}
//     else{console.log("defined")}
//     try{
//         id = window.localStorage.getItem('id');
//         console.log(id, "user");
//     }  catch(ex){
//         console.log(ex, "error")
//     }
//     return id;
// }

// export const getServerSideProps = async () => {
    
//     const https = require("https");
//     const agent = new https.Agent({ rejectUnauthorized: false })
//     const productsRes = await fetch(`https://localhost:7277/api/OrderHistorys/2`, { agent });
//     const productsData = await productsRes.json();
    
    
//     return {
//         props: {
//             productsData,
//         },
//     };
// }


export default function OrderHistory({ productsData}) {
    
    const router = useRouter();
    const[isLoading, setIsLoading] = useState(true);
    const[orderedData, setOrderedData] = useState(null);

    useEffect(() => {
        async function fetchCartData(){
            const userId = localStorage.getItem('id');
            const https = require("https");
            const agent = new https.Agent({ rejectUnauthorized: false })
            const productsRes = await fetch(`https://localhost:7277/api/OrderHistorys/` + userId, { agent });
            const productsData = await productsRes.json();
            setOrderedData(productsData);
            setIsLoading(false)
        }
        fetchCartData()
    }, [])
    if(isLoading){
        return (
            <Layout title="Home Page">
                <div className='flex flex-col justify-start gap-8 mt-5'>
                    <h1 className="text-3xl text-blue-700 font-semibold">Your cart:</h1>
                    <div className='flex flex-col justify-center items-center gap-5 mb-5'>
                        <h3>Loading...</h3>
                    </div>
                </div>
    
            </Layout >
        )
    }
     const items = orderedData.orderedItems;
     const total = orderedData.total
     console.log(items,"itemms");
    const allProducts = items.map((p) => (<div key={p.id}>
        <OrderItem
            total = {p.total}
            title={p.title}
            desc={p.description}
            id={p.id}
            productId={p.productId}
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