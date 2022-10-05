import Link from 'next/link'
import React from 'react'


export default function ProductItem({product}) {
  return (
    <div className='card'>
        <Link href={`/product/${product.path}`}>
            <a>
                <img src = {product.image}
                     alt = {product.name}
                     className = 'rounded shadow'>
                </img>
            </a>
        </Link>
        <div className='flex flex-col intems-center justify-center p-5'>
            <Link href={`/product/${product.path}`}>
             <a>
               <h2 className='text-lg'>{product.name}</h2>
             </a>
            </Link>
            <p>{product.stock}</p>
            <p>${product.price}</p>
            <button className='primary-button' type="button">
                Add to cart
            </button>
        </div>
    </div>
  )
}
