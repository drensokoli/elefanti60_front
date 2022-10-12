import React, { useContext } from "react";
import Link from "next/link";
import { CartContexts } from "../contexts/CartContexts";
import Image from "next/image";
import telefon from '../assets/telefon.jpg'
const SinglePost = ({ title, desc, id, price, image }) => {
    const { products, setProducts } = useContext(CartContexts);
    return (

        <div class="flex h-96 w-70 flex-col max-w-sm bg-white rounded-lg border border-gray-200 shadow-md justify-items-center mb-5 pb-5 ">
            <div className='flex flex-col items-center justify-center p-5 justify-items-center'>
                <Link href={`/product/${id}`}>
                    <a className="h-40">
                        <img src={image} alt="" />
                        {/* <Image src={image} width={100} height={100} layout="responsive" /> */}
                    </a>
                </Link>
            </div>
            <div className='flex flex-col intems-center justify-center p-5'>
                <Link href={`/product/${id}`}>
                    <a>
                        <h2 className='text-lg'>{title}</h2>
                    </a>
                </Link>
                <p>{desc}</p>
                <p className="mb-5">${price}</p>
                <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Add to Cart</button>

            </div>
        </div>


    )
}
export default SinglePost;