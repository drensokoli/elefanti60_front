import React, { useContext } from "react";
import Link from "next/link";
import { CartContexts } from "../contexts/CartContexts";

const SinglePost = ({ title, desc, id, price, image }) => {
    const { products, setProducts } = useContext(CartContexts);
    return (

<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
    {/* <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=""/>
    </a> */}
    <Link href={`/product/${id}`}>
                <a>
                    <img src={image}
                        alt={title}
                        className='rounded shadow'>
                    </img>
                </a>
            </Link>
            <div className='flex flex-col intems-center justify-center p-5'>
                <Link href={`/product/${id}`}>
                    <a>
                        <h2 className='text-lg'>{title}</h2>
                    </a>
                </Link>
                <p>{desc}</p>
                <p>${price}</p>
                <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Add to Cart</button>

            </div>
</div>


    )
}
export default SinglePost;