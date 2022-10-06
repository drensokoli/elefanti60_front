import React from "react";
import Link from "next/link";

const SinglePost = ({title, desc, id, category, price}) => {
    return (
        <div className='card'>
        <Link href={`/product/${id}`}>
            <a>
                <img src = 'images/telefon1.jpg' //img src = {product.image} 
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
            <p>${category}</p>
            <button className='primary-button' type="button">
                Add to cart
            </button>
        </div>
    </div>)
}
export default SinglePost;