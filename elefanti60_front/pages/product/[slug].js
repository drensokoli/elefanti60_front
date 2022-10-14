import React from 'react';
import Layout from '../../components/Layout';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import { CartContexts } from '../../contexts/CartContexts';
import Category from '../../components/Category';

export const getServerSideProps = async (context) => {

    const { params } = context;
    const { slug } = params;

    const https = require("https");
    const myUrl = `https:/localhost:7277/api/products/${slug}`;
    const agent = new https.Agent({ rejectUnauthorized: false })
    const productsRes = await fetch(myUrl, { agent });
    const productsData = await productsRes.json();

    return {
        props: {
            productsData,
        },
    };
}

export default function ProductScreen({ productsData }) {

    const { state, dispatch } = useContext(Store);
    //  const { products, setProducts } = useContext(CartContexts);

    const router = useRouter();
    const { query } = useRouter();
    const { path } = query;
    const product = productsData
    if (!product) {
        return <div> Product Not Found</div>;
    }
    const addToCartHandler = () => {
        const existsItem = state.cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existsItem ? existsItem.quantity + 1 : 1;

        if (product.stock < quantity) {
            alert('Sorry, Product is out of stock')
            return;
        }
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
        router.push('/cart');
        setProducts({ ...product, quantity })
    };


    //console.log(products, "Context products")
    console.log(state, "STORE STATE")
    return (

        <Layout title={product.title}>
            <div className='border-2 h-fit my-20'>
                <div className='flex flex-row justify-around'>
                    <div className='flex flex-col py-20'>
                        <img src={product.image} className='h-[300px]'></img>
                    </div>
                    <div className='flex flex-col py-20 w-[500px]'>
                        <div className='flex flex-row justify-between'>
                            <h5 class="mb-2 text-3xl md:text-5xl font-bold tracking-tight text-blue-700 ">{product.title}</h5>
                        </div>
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-500 ">{product.description}</h5>

                        <div className='card mt-10'>
                            <div className='mb-4 flex justify-between'>

                                {/* <h5 class="text-2xl pt-1 font-medium tracking-tight text-gray-900">Quantity</h5> */}
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 ">Quantity</h5>
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

                            </div>

                            <div className='mb-2 flex justify-between'>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 ">Total</h5>
                                <h5 class="mb-2 text-4xl font-medium tracking-tight text-gray-900">${product.price}</h5>
                            </div>
                            <button className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full' onClick={addToCartHandler}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
