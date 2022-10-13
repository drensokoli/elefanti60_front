import React from 'react'
import { Store } from '../utils/Store';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import Layout from '../components/Layout';
import Router, { useRouter } from 'next/router';
import SinglePost from '../components/SinglePost';
import tv from "../assets/tv.jpg"

export const getServerSideProps = async () => {

    const https = require("https");
    const myUrl = `https:/localhost:7277/api/products/`;
    const agent = new https.Agent({ rejectUnauthorized: false })
    const productsRes = await fetch(myUrl, { agent });
    const productsData = await productsRes.json();
    console.log(productsData);

    return {
        props: {
            productsData,
        },
    };
}


export default function CartScreen({ productsData }) {
    const router = useRouter();

    const allProducts = productsData.map((p) => (<div key={p.id}><SinglePost
        title={p.title}
        desc={p.description}
        id={p.id}
        price={p.price}
        stock={p.stock}
        category={p.category} />
    </div>));




    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;


    const removeItemHandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    }

    const updateCartHandler = () => {

    }

    return (
        <Layout title="Shopping Cart">
            <div class="container w-full h-screen mb-5">

                <a href="#" class="flex flex-row gap-20 justify-between px-5 h-52 items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 mb-5">
                    <div>
                        <Image class="object-cover" src={tv} />
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal w-1/2">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Biggest enterprise technology</p>
                    </div>

                    <div className=''>
                        <div>$500</div>
                    </div>
                    <div>

                        <form className=''>
                            <select className='h-10 w-12 font-normal text-xl'>
                                <option value="javascript">1</option>
                                <option value="php">2</option>
                                <option value="java">3</option>
                                <option value="golang">4</option>
                                <option value="python">5</option>
                                <option value="c#">6</option>
                                <option value="C++">7</option>
                                <option value="erlang">8</option>
                            </select>
                        </form>
                    </div>
                    <div className=''>
                        <div>$1500</div>
                    </div>
                </a>
            </div>
        </Layout>
    )
}

{/* <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                        ></Image> */}