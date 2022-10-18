import React from 'react';
import Layout from '../../components/Layout';
import Router, { useRouter } from 'next/router';

//Merr produktin nga endpointi 
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

export var quantity = 1;

//Merr sasine nga forma 
export function getQuantity(event) {
    event.preventDefault()
    quantity = document.getElementById("quantity").value;
}


export default function ProductScreen({ product }) {

    //Kontrollon nese ka produkti eshte ne dispozicion 
    let inStock;
    if (product.stock == 0) {
        inStock = "Nuk ka në dispozicion!";
    } else {
        inStock = "Stoku: " + product.stock;
    }

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
            quantity: quantity
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

        try {
            if (response.ok) {
                alert("Produkti u shtua në shportën e blerjes me sukses!")
            }
            else if (localStorage.getItem('id') == "null") {
                alert("Nuk jeni i kyçur")
            }
            else {
                alert("Nuk mund të porositni më shumë nga ky produkt!")
            }
        }
        catch (ex) {
            console.log(ex);
        }

    }

    return (
        <Layout title={product.title}>
            <div className='flex flex-col justify-center items-center'>
                <div className='border-2 h-fit lg:w-[90%] my-20'>
                    <div className='flex flex-col lg:flex-row justify-around'>
                        <div className='flex flex-row justify-center items-center'>
                            <img src={product.image} className='w-[250px] sm:w-auto md:h-[300px]'></img>
                        </div>
                        <div className='flex flex-col p-10 lg:w-[500px] justify-center'>
                            <h5 class="mb-2 text-3xl md:text-5xl font-bold tracking-tight text-blue-700 ">{product.title}</h5>
                            <h5 class="mb-2 text-xl md:text-3xl font-bold tracking-tight text-gray-500 ">{product.description}</h5>
                            <p className=" font-normal text-gray-700 dark:text-gray-500">{inStock}</p>

                            <div className='card mt-5 justify-start'>
                                <div className='mb-4 flex justify-between'>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 ">Sasia</h5>
                                    <div>
                                        <div className='h-10 w-12 font-normal text-xl mr-6'>
                                            <form id="quantity-form" onChange={getQuantity}>
                                                <div className='h-10 w-12 font-normal text-xl'>
                                                    <input type="number" defaultValue={1} name="quantity" min={1} max={product.stock} id="quantity" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-md p-2" required />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-2 flex justify-between'>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 ">Çmimi</h5>
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500" >${product.price}</h5>
                                </div>
                                <button className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full' onClick={addToCartHandler}>Shto në shportën e blerjes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}