import Link from 'next/link'
import React from 'react'
import slide1 from '../assets/slide1.jpg'
import Image from 'next/image'

export default function ProductItem({product}) {
  return (
   <>
   
<a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
    <div className='card'>
        <Link href={`/product/${product.path}`}>
            <a>
              <Image 
                src={slide1} 
                alt="test"
              />
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
    </> 
  )
}
