import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import DropdownMenu from '../components/DropdownMenu';
import Link from 'next/link';
import { useState, useEffect } from 'react'


export default function UserInfoScreen() {

    const[isLoading, setIsLoading] = useState(true);
    const[userData, setUserData] = useState(null);
     const router = useRouter();
     const logout = () => {
        localStorage.setItem("id", null);
        router.push("/")
     }

     useEffect(() => {
        async function fetchUserData(){
            const userId = localStorage.getItem('id');
            const https = require("https");
            const agent = new https.Agent({ rejectUnauthorized: false })
            const userRes = await fetch(`https://localhost:7277/api/Users/` + userId, { agent });
            const userData = await userRes.json();
            setUserData(userData);
            setIsLoading(false)
        }
        fetchUserData()
    }, [])

    if(isLoading){
        return (
            <Layout title="User Info">    
            </Layout >
        )
    }

    console.log(userData,"datata")
    return (
        <Layout title="User Info">
            <div className='flex flex-col justify-center items-center gap-4 h-screen mb-5'>
                <div className=" flex flex-col w-fit gap-3 h-fit">
                    <div className=" flex flex-col w-fit border-2 p-10 gap-3 h-fit">
                        <div className='flex flex-row justify-between'>
                            <h1 className='text-3xl text-left text-blue-500 '>User info</h1>
                        </div>

                        <div>
                            <h1 className=''>Name:</h1>
                        <h5 className='w-[200px] sm:w-[500px]'>{userData.name}</h5>
                        </div>
                        <div>
                            <h1 className=''>Last name:</h1>
                        <h5  className='w-[200px] sm:w-[500px]t-lg'>{userData.lastName}</h5>
                        </div>
                        <div>
                            <h1 className=''>Username:</h1>
                        <h5  className='w-[200px] sm:w-[500px]t-lg'>{userData.username}</h5>
                        </div>
                        <div>
                            <h1 className=''>Email:</h1>
                        <h5 className='w-[200px] sm:w-[500px] bog'>{userData.email} </h5>
                        </div>
                        <div>
                            <h1 className=''>Address:</h1>
                        <h5  className='w-[200px] sm:w-[500px] -lg'>{userData.address}</h5>
                        </div>
                        <div>
                            <h1 className=''>Amount:</h1>
                        <h5 className='w-[200px] sm:w-[500px] blg'> ${userData.amount}</h5>
                        </div>
                        
                    </div>


                    <Link href="/orderhistory">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Order History</button>
                    </Link>
                    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={logout}>Log out</button>
                </div>
            </div>

        </Layout>
    )
}