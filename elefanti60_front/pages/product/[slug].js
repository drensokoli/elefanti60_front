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
    const { products, setProducts } = useContext(CartContexts);

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


    console.log(products, "Context products")
    console.log(state, "STORE STATE")
    return (

        <Layout title={product.title}>

            <div className='grid md:grid-cols-2 md:gap-3 mt-10'>
                <div className='md:col-span-1 h-96 w-1000'>
                    <img src={product.image} className='w-[400px] items-center'></img>
                </div>
                <div className='mt-10'>
                    <ul>
                        <li>
                            <h1 className='text-lg'>{product.name}</h1>
                        </li>
                        <li className='text-lg'>{product.description}</li>
                        <li>Category: {product.category}</li>
                    </ul>
                    <div className='card mt-40'>

                        <div className='mb-2 flex justify-between'>
                            <div>Price</div>
                            <div>${product.price}</div>
                        </div>
                        <div className='mb-2 flex justify-between'>
                            <div>Stock</div>
                            <div>{product.stock}</div>
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
                        <div className='mb-2 flex justify-between'>
                            <div>Total</div>
                            <div>${product.price}</div>
                        </div>
                        <button className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full' onClick={addToCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
