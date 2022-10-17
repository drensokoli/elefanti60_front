import React from 'react'
import Layout from '../components/Layout';
import { useState, useEffect } from 'react'


export default function UserInfoScreen() {

    const [isLoading, setIsLoading] = useState(true); //Kontrollon nese te dhenat jane marre nga useEffect
    const [userData, setUserData] = useState(null); //Ruan te dhenat e marra nga endpoint-i
    
    //Merr te dhenat e user-it nga endpointi 
    useEffect(() => {
        async function fetchUserData() {
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

    if (isLoading) {
        return (
            <Layout title="User Info">
            </Layout >
        )
    }

    return (
        <Layout title="User Info">
            <div className='flex flex-col items-center gap-4 h-fit m-20'>
                <div className=" flex flex-col w-fit gap-3">
                    <div className=" flex flex-col w-fit border-2 p-10 gap-3">
                        <div className='flex flex-row justify-between'>
                            <h1 className='text-3xl text-left text-blue-500 '>Informatat e përdoruesit</h1>
                        </div>
                        <div>
                            <h1 className='text-xs text-gray-500'>Emri:</h1>
                            <h5 className='w-[200px] sm:w-[500px]'>{userData.name}</h5>
                        </div>
                        <div>
                            <h1 className='text-xs text-gray-500'>Mbiemri:</h1>
                            <h5 className='w-[200px] sm:w-[500px]t-lg'>{userData.lastName}</h5>
                        </div>
                        <div>
                            <h1 className='text-xs text-gray-500'>Emri i përdoruesit:</h1>
                            <h5 className='w-[200px] sm:w-[500px]t-lg'>{userData.username}</h5>
                        </div>
                        <div>
                            <h1 className='text-xs text-gray-500'>Adresa juaj elektronike:</h1>
                            <h5 className='w-[200px] sm:w-[500px] bog'>{userData.email} </h5>
                        </div>
                        <div>
                            <h1 className='text-xs text-gray-500'>Adresa:</h1>
                            <h5 className='w-[200px] sm:w-[500px] -lg'>{userData.address}</h5>
                        </div>
                        <div>
                            <h1 className='text-xs text-gray-500'>Sasia:</h1>
                            <h5 className='w-[200px] sm:w-[500px] blg'> ${userData.amount}</h5>
                        </div>

                    </div>

                </div>
            </div>

        </Layout>
    )
}