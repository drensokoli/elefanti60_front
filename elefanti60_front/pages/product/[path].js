import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductScreen() {
    const {query} = useRouter();
    const {path} = query;
    const product = data.products.find( x => x.path === path);
    if(!product){
        return <div> Product Not Found</div>
    }

    return (
        <Layout title={product.name}>            
            <div className='py-2'>
                <Link href="/">Go back</Link>
            </div>
            <div className='grid md:grid-cols-4 md:gap-3'>
                <div className='md:col-span-2'>
                    <Image
                    src = {`/${product.image}`}
                    alt = {product.name}
                    width = {640}
                    height = {640}
                    layout = "responsive"
                    ></Image>
                </div>
                <div>
                    <ul>
                        <li>
                            <h1 className='text-lg'>{product.name}</h1>
                        </li>
                        <li>Description: {product.description}</li>
                        <li>Category: {product.category}</li>
                    </ul>
                </div>
                <div>
                    <div className='card content-center p-5'>
                            <div className='mb-2 flex justify-between '>
                                <div>Price</div>
                                <div>${product.price}</div>
                            </div>
                            <div className='mb-2 flex justify-between'>
                                <div>Status</div>
                                <div>{product.stock > 0 ? 'In stock' : 'Unavailable'}</div>
                            </div>
                            <button className='"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-full'>Add to cart</button>
                    </div> 
                </div>
            </div>
        </Layout>
    )
}
