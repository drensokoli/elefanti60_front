import React from "react";
import { useContext } from "react";
import { CartContexts } from "../contexts/CartContexts";
import LoginComponent from "./LoginComponent";
import { UilUser, UilShoppingCart } from '@iconscout/react-unicons';
import DropdownMenuItem from "./DropdownMenuItem";
import { useEffect, useState } from 'react'
import Link from "next/link";


export default function ChangingNavItem() {
    const [component, setComponent] = useState()
    var id = useContext(CartContexts);

    const clearLocalStorage = () => {
        try {
            localStorage.setItem('id', null);
        } catch (ex) {
            console.log(ex)
        }
    }
    const login = (<LoginComponent />)
    const dropdown = (
        <div className="flex flex-row gap-16 sm:gap-20 justify-center items-center">
            <div>
                <DropdownMenuItem option={<UilUser />} className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow'>
                    <div className='z-10 shadow-2xl	 bg-white relative right-12 top-1 border-2 border-violet'>
                        <div className="divide-y divide-slate-200  py-1 text-sm text-blue-500 dark:text-gray-400 text-center" aria-labelledby="dropdownNavbarButton">
                            <a href='/userinfo' className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profili im</a>
                            <a href='/orderhistory' className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Historia ime e porosive</a>
                            <a href="/">
                                <p className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={clearLocalStorage}>Ç'kyqu</p>
                            </a>
                            <a href='/'>
                            </a>
                        </div>
                    </div>
                </DropdownMenuItem>
            </div>
            <div>
                <Link href="/cart">
                    <a className=' p-2'>
                        <UilShoppingCart />
                    </a>
                </Link>
            </div>
        </div>)

    //Varesisht nese perdoruesi eshte logged in i shfaq ose "Kycu" ose i shfaq ikonen per shporte dhe userinfo
    var userEmpty = id == "null";
    userEmpty ? useEffect(() => setComponent(login), []) : useEffect(() => setComponent(dropdown), [])
    return (
        <>
            <div>
                {
                    component
                }
            </div >
        </>
    );
}
