import React from 'react'
import Link from 'next/link';

const Category = ({ id, name }) => {
  
  return (
    <>
      <Link href={`/category/${name}`}>
      <li class="nav-item flex-grow text-center list-none" role="presentation">
          <a href="" class="
            nav-link
            w-full
            block
            font-medium
            text-xs
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent" id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
            aria-controls="tabs-homeJustify" aria-selected="true">{name}</a>
        </li>
      </Link>
    </>
  )
}
export default Category;