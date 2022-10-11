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
            <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Purple</button>
        </div>
    </div>
  )
}
