import React from 'react'
import Head from 'next/head'
import { UilUser, UilShoppingCart } from '@iconscout/react-unicons'
// import Header from './Header'
import Link from 'next/link'
import { Store } from '../utils/Store'
import { useContext } from 'react'
import DropdownMenuItem from './DropdownMenuItem'
import logo from '../assets/logo.png'
import Image from 'next/image'
import { UilSearch } from '@iconscout/react-unicons'

const Navbar = () => {

    const { state, dispatch } = useContext(Store);
    const { cart } = state;

    return (

        <nav className='h-auto items-center px-4 shadow-lg'>
            <div className='flex flex-row h-20 items-center px-4 shadow-lg md:justify-around justify-between'>
                <div className='gap-10'>
                    <Link href={`/`} className='cursor-pointer'>
                        <a>
                            <Image
                                src={logo}
                                className='w-9'
                            />
                        </a>
                    </Link>

                </div>

                <div className='w-1/2 h-auto invisible sm:visible'>
                    <form>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Search for products" required="" />
                            <button type="submit" class="absolute right-2.5 bottom-2.5">{UilSearch}</button>
                        </div>
                    </form>

                </div>

                <div className='flex justify-center items-center gap-10'  >

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

                    <Link href="/signup">
                        <a>
                            <UilUser />
                        </a>
                    </Link> 

                </div>
            </div>
            <div className='pb-2 visible sm:hidden'>
                <form>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sm:visible hidden">Search</label>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Search for products" required="" />
                        <button type="submit" class="absolute right-2.5 bottom-2.5">{UilSearch}</button>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;