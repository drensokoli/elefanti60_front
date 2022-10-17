import React, { useState } from "react";
import { useContext } from 'react'
import { UilUser, UilShoppingCart } from '@iconscout/react-unicons'
import Link from 'next/link'
import logo from '../assets/logo.png'
import Image from 'next/image'
import { UilSearch } from '@iconscout/react-unicons'
import { useRouter } from 'next/router';
import ChangingNavItem from "./ChangingNavItems";


const Navbar = () => {

    const [formInput, setFormInput] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const [products, setProducts] = useState('')
    const Router = useRouter();

    const handleInput = (event) => {
        let { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
        setSearchTerm(event.target.value);
    }

    const handleSubmit = async (event) => {

        event.preventDefault()
        const productsData = await fetch(`https://localhost:7277/api/Products/Title/${formInput.searchTerm}`);
        productsData = await productsData.json()
        setProducts(productsData)
        console.log(products)
        const url = `http://localhost:3000/search?q=${formInput.searchTerm}`
        Router.push(url);
    }

    return (

        <>
            <nav className='h-auto items-center px-4 shadow-lg'>
                <div className='flex flex-row h-20 items-center px-4 shadow-lg md:justify-around justify-between'>
                    <div className='gap-10'>
                        <Link href={`/`} className='cursor-pointer'>
                            <a>
                                <Image
                                    src={logo}
                                    className='w-9' />
                            </a>
                        </Link>
                    </div>

                    <div className='w-1/2 h-auto invisible sm:visible'>
                        <form onSubmit={handleSubmit}>
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Kërko</label>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" name="searchTerm" id="default-search" value={searchTerm} onChange={handleInput} class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Kërko produkte" required />
                                <button type="submit" class="absolute right-2.5 bottom-2.5">{UilSearch}</button>
                            </div>
                        </form>

                    </div>
                    <div>
                      <ChangingNavItem/> 
                    </div>
                </div>
                <div className='pb-2 visible sm:hidden'>
                    <form onSubmit={handleSubmit}>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sm:visible hidden">Kërko</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" name="searchTerm" id="default-search" value={searchTerm} onChange={handleInput} class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Kërko produkte" required="" />

                            <button type="submit" class="absolute right-2.5 bottom-2.5">{UilSearch}</button>
                        </div>
                    </form>
                </div>
            </nav>
        </>

    );
}

export default Navbar;