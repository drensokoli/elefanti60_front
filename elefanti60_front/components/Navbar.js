import React, { useState } from "react";
import { useContext } from 'react'
import Head from 'next/head'
import { UilUser, UilShoppingCart } from '@iconscout/react-unicons'
// import Header from './Header'
import Link from 'next/link'
import { Store } from '../utils/Store'
import DropdownMenuItem from './DropdownMenuItem'
import logo from '../assets/logo.png'
import Image from 'next/image'
import search from "../pages/search";
import { UilSearch } from '@iconscout/react-unicons'
import { useRouter } from 'next/router';
import DropdownMenu from "./DropdownMenu";


const Navbar = () => {

    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const [formInput, setFormInput] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const [products, setProducts] = useState('')
    const Router = useRouter();

    const handleInput = (event) => {
        let { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
        setSearchTerm(event.target.value);
        // Router.push("http://localhost:3000/search");
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
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" name="searchTerm" id="default-search" value={searchTerm} onChange={handleInput} class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Search for products" required="" />
                            <button type="submit" class="absolute right-2.5 bottom-2.5">{UilSearch}</button>
                        </div>
                    </form>

                </div>

                        {/* <div className='flex justify-center items-center gap-10'  >
                            <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                                </ul>
                            </div> */}
                <Link href="/userinfo">
                    <a>
                        <UilUser /> 
                    </a>
                </Link>

                <Link href="/login">
                    <a>
                        <h1>LOGIN</h1>
                    </a>
                </Link>
                <Link href="/cart">
                    <a className='p-2 '>
                        <UilShoppingCart />
                        {cart.cartItems.length > 0 && (
                            <span className='ml-1 rounded-full bg-violet-600 px-2 py-1 text-xs font-bold text-white'>
                                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                            </span>
                        )}
                    </a>
                </Link>
            </div>
        <div className='pb-2 visible sm:hidden'>
                <form onSubmit={handleSubmit}>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sm:visible hidden">Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" name="searchTerm" id="default-search" value={searchTerm} onChange={handleInput} class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Search for products" required="" />

                        <button type="submit" class="absolute right-2.5 bottom-2.5">{UilSearch}</button>
                    </div>
                </form>
            </div>
        </nav>
        </>

    );
}

export default Navbar;