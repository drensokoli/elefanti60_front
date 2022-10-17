import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
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
                            <h1 className='text-3xl text-left text-blue-500 '>Informata të përdoruesit</h1>
                        </div>

                        <div>
                            <h1 className=''>Emri:</h1>
                        <h5 className='w-[200px] sm:w-[500px]'>{userData.name}</h5>
                        </div>
                        <div>
                            <h1 className=''>Mbiemri:</h1>
                        <h5  className='w-[200px] sm:w-[500px]t-lg'>{userData.lastName}</h5>
                        </div>
                        <div>
                            <h1 className=''>Emri i përdoruesit:</h1>
                        <h5  className='w-[200px] sm:w-[500px]t-lg'>{userData.username}</h5>
                        </div>
                        <div>
                            <h1 className=''>Adresa juaj elektronike:</h1>
                        <h5 className='w-[200px] sm:w-[500px] bog'>{userData.email} </h5>
                        </div>
                        <div>
                            <h1 className=''>Adresa:</h1>
                        <h5  className='w-[200px] sm:w-[500px] -lg'>{userData.address}</h5>
                        </div>
                        <div>
                            <h1 className=''>Sasia:</h1>
                        <h5 className='w-[200px] sm:w-[500px] blg'> ${userData.amount}</h5>
                        </div>
                        
                    </div>

                </div>
            </div>

        </Layout>
    )
}