import React from "react";
import { useContext } from "react";
import { CartContexts } from "../contexts/CartContexts";
import LoginComponent from "./LoginComponent";
import { UilUser, UilShoppingCart } from '@iconscout/react-unicons';
import DropdownMenuItem from "./DropdownMenuItem";
import Router from 'next/router'


export default function ChangingNavItem() {
    var id;
    const getId = () => {
        // const id = useContext(CartContexts);
        // return id;


        if (typeof window === "undefined") { console.log("window undefined") }
        else { console.log("window defined") }
        try {
            id = window.localStorage.getItem('id');
            console.log(id, "user");
            
        } catch (ex) {
            console.log(ex, "error")
        }
        return id;
    }

    const clearLocalStorage = () => {
        // const id = useContext(CartContexts);
        // return id;


        if (typeof window === "undefined") { console.log("window undefined") }
        else { console.log("window defined") }
        try {
            window.localStorage.clear(getId(id));
            Router.push('/')

            console.log(id, "user");
            
        } catch (ex) {
            console.log(ex, "error")
        }
        return
        ;
    }

    var userEmpty = getId(id) == null;
    console.log(id, "idd")
    return (
        <>
        <div>
            {
                userEmpty ?
                    (<LoginComponent />) :
                    (<DropdownMenuItem option={<UilUser/>} className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'>
                        <div className='z-10 shadow-2xl	 bg-white relative right-12 top-1 border-2 border-violet'>
                            <div className="divide-y divide-slate-200  py-1 text-sm text-blue-500 dark:text-gray-400 text-center" aria-labelledby="dropdownNavbarButton">
                                <a href='/userinfo' className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Profile</a>
                                <a href='/userinfo' className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Order History</a>
                                <p className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={clearLocalStorage}>Log Out</p>
                            </div>
                        </div>
                    </DropdownMenuItem>)


            }
        </div >
   </>
    );
}

