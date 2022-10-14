import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../components/Layout';



export default function UserInfoScreen() {
    return (
        <Layout title="User Info">
            <div className='flex flex-col'>
                <div className='  top-10 h-250 w-50 border-2'>
                    <div className=" flex flex-col items-left mt-12 ml-10">
                        <h1 className='text-3xl	text-left text-blue-500 '>Të dhënat e profilit</h1>
                        <h1 className='mt-5 text-xl	 '>Informatat e llogarisë tuaj</h1>
                        <h1 className='mt-6'>Emri:</h1>
                        <h1 className='mt-5'>Mbiemri:</h1>
                        <h1 className='mt-5'>Username:</h1>
                        <h1 className='mt-5'>Email: </h1>
                        <h1 className='mt-5 mb-20'>Adresa:</h1>
                        {/* <h1 className=''>Numri i kartelës:</h1> */}

                    </div>
                </div>

            <div className=''>
                <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Sign Out</button>
                <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete Account</button>
            </div>
            
            </div>
        </Layout>
    )
}
