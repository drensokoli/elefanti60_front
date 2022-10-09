import React from 'react'
import { Store } from '../utils/Store';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import Layout from '../components/Layout';
import Router, { useRouter } from 'next/router';
import SinglePost from '../components/SinglePost';
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
  
        const allProducts = productsData.map((p) => (<div key = {p.id}><SinglePost 
          title = {p.title}  
          desc = {p.description}
          id = {p.id}
          price = {p.price}
          stock = {p.stock}
          category = {p.category}/>
          </div>));
      

      
    
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    

    const removeItemHandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    }

    const updateCartHandler = () =>{
        
    }

    return (
        <Layout title="Shopping Cart">
            <h1 clasName='mb-4 text-xl'>Shopping Cart</h1>
            {
                cartItems.length === 0 ?
                    (<div>
                        Cart is empty, <Link href="/">Go back</Link>
                    </div>
                    ) : (
                        <div className='grid md:grid-cols-4 md:gap-5'>
                            <div className='overflow-x-auto md:col-span-3'>
                                <table className='min-w-full'>
                                    <thead className='border-b'>
                                        <tr>
                                            <th className='px-5 text-left'>Item</th>
                                            <th className='p-5 text-right'>Quantity</th>
                                            <th className='p-5 text-right'>Price</th>
                                            {/* <th className='p-5 text-right'>Action</th> */}

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.slug} className='border-b'>
                                                <td>
                                                    <Link href={`/products/${item.slug}`}>
                                                        <a className='flex items-center'>
                                                            &nbsp;
                                                            {item.name}</a>
                                                    </Link>
                                                </td>
                                                <div className='flex'>
                                                    <button onClick={decrementQuantity}>-</button>
                                                    <td className='p-5 text-right'>${item.quantity}</td>
                                                    <button onClick={incrementQuantity}>+</button>
                                                </div>
                                                <td className='p-5 text-right'>${item.price}</td>
                                                <td className='p-5 text-right'>
                                                    <button className='bg-violet-600 text-white	rounded-md text-md py-1 px-3	' onClick={() => removeItemHandler(item)}>Remove Item</button>
                                                </td>

                                            </tr>
                                        )

                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className='card p-5 drop-shadow-xl bg-violet-50'>
                                <ul>
                                    <li>
                                        <div classNAme='pb-3'>
                                            Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                                            {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                                        </div>
                                    </li>
                                    <button onClick={() => router.push('/checkout')}
                                        className='primary-button w-full bg-violet-900 text-white rounded-md' >Check Out

                                    </button>
                                </ul>
                            </div >
                        </div>
                    )
            }
        </Layout>
    )
}

{/* <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                        ></Image> */}