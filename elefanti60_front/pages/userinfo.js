import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import DropdownMenu from '../components/DropdownMenu';
import Link from 'next/link';


export default function UserInfoScreen() {
    return (
        <Layout title="User Info">
            <div className='flex flex-col justify-center items-center gap-4 h-screen mb-5'>
                <div className=" flex flex-col w-fitp-10 gap-3 h-fit">
                    <div className=" flex flex-col w-fit border-2 p-10 gap-3 h-fit">
                        <div className='flex flex-row justify-between'>
                            <h1 className='text-3xl text-left text-blue-500 '>User info</h1>
                        </div>

                        <div>
                            <h1 className=''>Name:</h1>
                            <input className='h-9 sm:w-[500px] w-[250px] border-2 rounded' type="text" name="" id="" />
                        </div>
                        <div>
                            <h1 className=''>Last name:</h1>
                            <input className='h-9 sm:w-[500px] w-[250px] border-2 rounded' type="text" name="" id="" />
                        </div>
                        <div>
                            <h1 className=''>Username:</h1>
                            <input className='h-9 sm:w-[500px] w-[250px] border-2 rounded' type="text" name="" id="" />
                        </div>
                        <div>
                            <h1 className=''>Email:</h1>
                            <input className='h-9 sm:w-[500px] w-[250px] border-2 rounded' type="text" name="" id="" />
                        </div>
                        <div>
                            <h1 className=''>Address:</h1>
                            <input className='h-9 sm:w-[500px] w-[250px] border-2 rounded' type="text" name="" id="" />
                        </div>
                        <div>
                            <h1 className=''>Amount:</h1>
                            <input className='h-9 sm:w-[500px] w-[250px] border-2 rounded' type="text" name="" id="" />
                        </div>
                        <div className='flex md:flex-row flex-col justify-center'>
                            <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Revert changes</button>
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Save changes</button>
                        </div>                </div>


                    <Link href="/orders">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Order History</button>
                    </Link>
                    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Log out</button>
                </div>
            </div>

        </Layout>
    )
}
