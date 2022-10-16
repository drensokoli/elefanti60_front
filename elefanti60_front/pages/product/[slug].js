import React from 'react';
import Layout from '../../components/Layout';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { CartContexts } from '../../contexts/CartContexts';
import Category from '../../components/Category';

export const getServerSideProps = async (context) => {

    const { params } = context;
    const { slug } = params;

    const https = require("https");
    const myUrl = `https:/localhost:7277/api/products/${slug}`;
    const agent = new https.Agent({ rejectUnauthorized: false })
    const productsRes = await fetch(myUrl, { agent });
    const product = await productsRes.json();

    return {
        props: {
            product,
        },
    };
}

export function getId() {
    const id = useContext(CartContexts);
    return id;
}

export var quantity = 1;

export function getQuantity(event) {
    event.preventDefault()
    quantity = document.getElementById("quantity").value;
}

export default function ProductScreen({ product }) {

    const router = useRouter();
    const { query } = useRouter();
    const { path } = query;
    if (!product) {
        return <div> Product Not Found</div>;
    }

    const addToCartHandler = async (event) => {
        event.preventDefault();
        const data = {
            userId: localStorage.getItem('id'),
            productId: product.id,
            quantity: quantity,
        }

        const jsonData = JSON.stringify(data);
        const endpoint = 'https://localhost:7277/api/CartItems';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData,
        }

        const response = await fetch(endpoint, options);
        console.log(response, "response");
        console.log(quantity,"quantity");
        console.log(product.stock,"stock");
        console.log(jsonData,"jsondaata")
        console.log(localStorage.getItem('id') == "null", "isnull")
          
            try{
                if(response.ok){
                    alert("Product added to cart succesfully")
                }
                else if(localStorage.getItem('id')== "null"){
                    alert("You're not logged in")                    
                }
                else if(quantity> product.stock){
                    alert("You can't order more of this product")
                }
            }
            catch(ex){
               console.log(ex);
            }

    }
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
                                    <form id="quantity-form" onChange={getQuantity}>
                                        <div className='h-10 w-12 font-normal text-xl'>
                                            <input type="number" defaultValue={1} name="quantity" min={1} max={product.stock} id="quantity" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-md block w-fit p-2.5" required/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='mb-2 flex justify-between'>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 ">Total</h5>
                                <h5 class="mb-2 text-4xl font-medium tracking-tight text-gray-900" >{product.total}</h5>
                            </div>
                            <button className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full' onClick={addToCartHandler}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
