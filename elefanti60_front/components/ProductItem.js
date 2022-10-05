import Link from 'next/link'
import React from 'react'


export default function ProductItem({product}) {
  return (
    <div className='card'>
        <Link href={`/product/${product.slug}`}>
            <a>
                <img src = {product.image}
                     alt = {product.name}
                     className = 'rounded shadow'>
                </img>
            </a>
        </Link>

        <div className='flex flex-col intems-center justify-center'>
            <Link>
             <a>
               <h2 className='text-lg'>{product.name}</h2>
             </a>
            </Link>
            <p className=''>{product.brand}</p>
        </div>
    </div>
  )
}
