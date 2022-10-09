import React, { useContext } from "react";
import Link from "next/link";
import { CartContexts } from "../contexts/CartContexts";

const SinglePost = ({title, desc, id, price, image}) => {
    const {products, setProducts} = useContext(CartContexts);
    return (
        <div className='card'>
        <Link href={`/product/${id}`}>
            <a>
                <img src = {image} 
                     alt = {title}
                     className = 'rounded shadow'>
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
            <button className='primary-button' type="button">
                Add to cart
            </button>
        </div>
    </div>)
}
export default SinglePost;