import React, { useContext } from "react";
import Link from "next/link";
import { CartContexts } from "../contexts/CartContexts";
import Image from "next/image";
import telefon from '../assets/telefon.jpg'
import Router from "next/router";
import { useRouter } from "next/router";

export function getId () {
    const id = useContext(CartContexts);
    return id;
}
const SinglePost = ({ title, desc, id, category, price, image }) => {
    const  router = useRouter()
    const redirect = async (event) => {
        event.preventDefault();
        if(localStorage.getItem('id') == null){
            alert("You're not logged in!")
            router.push("http://localhost:3000/login")
        }
        const data = {
        userId: localStorage.getItem('id'),
        productId: id,
        quantity: 1,
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
        console.log(response);
       // const result = await response.json()
       if(!response.ok){
        alert("You're not logged in")
        router.push("http://localhost:3000/login");
    } else {
        try {
            const result = await response.json();
            console.log(result);
            alert("Product added to cart succesfully")
        }
        catch (ex) {
            console.log(ex)
            alert("You can't order more of this product");
        }
    }
    }
   // const { products, setProducts } = useContext(CartContexts);
    return (
        
<>


        <div class="flex h-[400px] w-70 flex-col max-w-sm bg-white rounded-lg border border-gray-200 shadow-md justify-items-center pb-5 ">
            <div className='flex flex-col items-center justify-center p-10 justify-items-center'>
                <Link href={`/product/${id}`}>
                    <a className="h-40">
                        <img src={image} alt="" />
                    </a>
                </Link>
            </div>
            <div className='flex flex-col mt-3 justify-center p-5'>
                <Link href={`/product/${id}`}>
                    <div className="flex flex-row justify-between">
                        <h5 class=" text-xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                        <p className=" text-xl font-mediium tracking-tight text-gray-700">${price}</p>
                    </div>

                </Link>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-500">{category}</p>
                <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 " onClick={redirect}>Add to Cart</button>

            </div>
        </div>
</>

    )
}
export default SinglePost;