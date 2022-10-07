import React from 'react'
import Link from 'next/link';

const Category = ({id, name}) => {
    return (
            <Link href={`/category/${name}`}>
             <a>
               <h2 className='text-lg px-2'>{name}</h2>
             </a>
            </Link>
    )
}
export default Category;