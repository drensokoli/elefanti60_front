import React from 'react'
import { Store } from '../utils/Store';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import Layout from '../components/Layout';

export const getServerSideProps = async () => {
   
    const https = require("https");
    const myUrl = `https:/localhost:7277/api/products/`;
    const agent = new https.Agent({rejectUnauthorized: false})
    const productsRes = await fetch(myUrl, { agent });
    const productsData = await productsRes.json();
    console.log(productsData);
  
    return{
      props: {
       productsData,
      },
    };
  }


export default function CartScreen() {

    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    const removeItemHandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload:item});
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
                                            <th className='p-5 text-right'>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.slug} className='border-b'>
                                                <td>
                                                    <Link href={`/productItems/${item.slug}`}>
                                                        <a className='flex items-center'>
                                                        &nbsp;
                                                        {item.name}
                                                        {/* <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                        ></Image> */}
                                                       
                                                        </a>
                                                    </Link>
                                                </td>
                                                <td className='p-5 text-right'>{item.quantity}</td>
                                                <td className='p-5 text-right'>
                                                    <button onClick={() => removeItemHandler(item)}>Remove Item</button>
                                                </td>

                                            </tr>
                                        )

                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
            }
        </Layout>
    )
}
