import React from 'react'
import Link from 'next/link';

const Category = ({id, name}) => {
    return (
      <>
            <Link href={`/category/${name}`}>
             <a className='text-xl text-black hover:underline'>
              {name}
             </a>
            </Link>
            <hr></hr>
            </>
    )
}
export default Category;