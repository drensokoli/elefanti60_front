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
            <div class="container w-full mb-5">

            <a href="#" class="flex flex-row h-52 items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 mb-5 gap-48">
                    <div>
                        <Image class="object-cover h-48 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={tv} />
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Biggest enterprise technology</p>
                    </div>
                    <div>
                        <div className='mb-2 flex justify-between'>
                            <div>Price</div>
                            <div>$500</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Stock</div>
                            <div>100</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Quantity</div>
                            <div className='input-group flex justify-between'>
                                <button type='button'>-</button>
                                <div>1</div>
                                <button type='button'>+</button>
                            </div>
                            {/* <input value={1} className='w-6 text-right' ></input> */}
                        </div>
                    </div>
                </a>
                <a href="#" class="flex flex-row h-52 items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 mb-5 gap-48">
                    <div>
                        <Image class="object-cover h-48 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={tv} />
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Biggest enterprise technology</p>
                    </div>
                    <div>
                        <div className='mb-2 flex justify-between'>
                            <div>Price</div>
                            <div>$500</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Stock</div>
                            <div>100</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Quantity</div>
                            <div className='input-group flex justify-between'>
                                <button type='button'>-</button>
                                <div>1</div>
                                <button type='button'>+</button>
                            </div>
                            {/* <input value={1} className='w-6 text-right' ></input> */}
                        </div>
                    </div>
                </a>
                <a href="#" class="flex flex-row h-52 items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 mb-5 gap-48">
                    <div>
                        <Image class="object-cover h-48 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={tv} />
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Biggest enterprise technology</p>
                    </div>
                    <div>
                        <div className='mb-2 flex justify-between'>
                            <div>Price</div>
                            <div>$500</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Stock</div>
                            <div>100</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Quantity</div>
                            <div className='input-group flex justify-between'>
                                <button type='button'>-</button>
                                <div>1</div>
                                <button type='button'>+</button>
                            </div>
                            {/* <input value={1} className='w-6 text-right' ></input> */}
                        </div>
                    </div>
                </a>
                <a href="#" class="flex flex-row h-52 items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 mb-5 gap-48">
                    <div>
                        <Image class="object-cover h-48 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={tv} />
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Biggest enterprise technology</p>
                    </div>
                    <div>
                        <div className='mb-2 flex justify-between'>
                            <div>Price</div>
                            <div>$500</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Stock</div>
                            <div>100</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Quantity</div>
                            <div className='input-group flex justify-between'>
                                <button type='button'>-</button>
                                <div>1</div>
                                <button type='button'>+</button>
                            </div>
                            {/* <input value={1} className='w-6 text-right' ></input> */}
                        </div>
                    </div>
                </a>
                <a href="#" class="flex flex-row h-52 items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 mb-5 gap-48">
                    <div>
                        <Image class="object-cover h-48 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={tv} />
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Biggest enterprise technology</p>
                    </div>
                    <div>
                        <div className='mb-2 flex justify-between'>
                            <div>Price</div>
                            <div>$500</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Stock</div>
                            <div>100</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Quantity</div>
                            <div className='input-group flex justify-between'>
                                <button type='button'>-</button>
                                <div>1</div>
                                <button type='button'>+</button>
                            </div>
                            {/* <input value={1} className='w-6 text-right' ></input> */}
                        </div>
                    </div>
                </a>
                <a href="#" class="flex flex-row h-52 items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 mb-5 gap-48">
                    <div>
                        <Image class="object-cover h-48 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={tv} />
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Biggest enterprise technology</p>
                    </div>
                    <div>
                        <div className='mb-2 flex justify-between'>
                            <div>Price</div>
                            <div>$500</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Stock</div>
                            <div>100</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Quantity</div>
                            <div className='input-group flex justify-between'>
                                <button type='button'>-</button>
                                <div>1</div>
                                <button type='button'>+</button>
                            </div>
                            {/* <input value={1} className='w-6 text-right' ></input> */}
                        </div>
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