import React from 'react';
import Layout from '../../components/Layout';
import Router, {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import { CartContexts } from '../../contexts/CartContexts';

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

export default function ProductScreen({productsData}) {

    const {state, dispatch }= useContext(Store);
    const {products, setProducts} = useContext(CartContexts);

    const router = useRouter();
    const {query} = useRouter();
    const {path} = query;
    const product = productsData.find( x => x.path === path);
    if(!product){
        return <div> Product Not Found</div>;
    }
    const addToCartHandler = () => {
        const existsItem = state.cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existsItem ? existsItem.quantity + 1 : 1;

        if (product.stock < quantity) {
            alert('Sorry, Product is out of stock')
            return ;
        }
        dispatch({type:'CART_ADD_ITEM', payload: { ...product, quantity }});
        router.push('/cart');
        // const arraCarts = []
        // arraCarts.push(product)
        setProducts({...product, quantity})
    };


    console.log(products, "Context products")
    console.log(state, "STORE STATE")
    return (
        <Layout title={product.title}>            
           <div className='py-2'>
                <Link href="/">Go back</Link>
            </div>
            <div className='grid md:grid-cols-4 md:gap-3'>
                <div className='md:col-span-2'>
                    <Image
                    src = '/images/telefon1.jpg'
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
                            <button className='"bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l w-full' onClick={addToCartHandler}>Add to cart</button>
                    </div> 
                </div>
            </div>
        </Layout>
    )
}
