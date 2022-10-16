import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import DropdownMenu from '../components/DropdownMenu';
import Link from 'next/link';
import { useState, useEffect } from 'react'



const handleEdit = async (event) => {


}
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
                            <input type="text" id =" " name="" defaultValue={userData.name} className='w-[200px] sm:w-[500px] border-2 rounded h-10 text-lg'/>
                        </div>
                        <div>
                            <h1 className=''>Last name:</h1>
                            <input type="text" id =" " name="" defaultValue={userData.lastName} className='w-[200px] sm:w-[500px] border-2 rounded h-10 text-lg'/>
                        </div>
                        <div>
                            <h1 className=''>Username:</h1>
                            <input type="text" id =" " name="" defaultValue={userData.username} className='w-[200px] sm:w-[500px] border-2 rounded h-10 text-lg'/>
                        </div>
                        <div>
                            <h1 className=''>Email:</h1>
                            <input type="text" id =" " name="" defaultValue={userData.email} className='w-[200px] sm:w-[500px] border-2 rounded h-10 text-lg'/>
                        </div>
                        <div>
                            <h1 className=''>Address:</h1>
                            <input type="text" id =" " name="" defaultValue={userData.address} className='w-[200px] sm:w-[500px] border-2 rounded h-10 text-lg'/>
                        </div>
                        <div>
                            <h1 className=''>Amount:</h1>
                            <input type="text" id =" " name="" defaultValue={userData.amount} className='w-[200px] sm:w-[500px] border-2 rounded h-10 text-lg'/>
                        </div>
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleEdit}>Save changes</button>
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
