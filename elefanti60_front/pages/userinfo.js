import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../components/Layout';



export default function UserInfoScreen(){
    return ( 
        <Layout title="User Info">
            <div> 
                <div className=" flex flex-col items-left mt-10 ">
                    <h1 className='text-3xl    text-left text-blue-500 '>Të dhënat e profilit</h1>
                    <h1 className>Informatat e llogarisë tuaj</h1>
                    <h1 className=''>Emri:</h1>
                    <h1 className=''>Mbiemri:</h1>
                    <h1 className=''>Username:</h1>
                    <h1 className=''>Email: </h1>
                    <h1 className=''>Adresa:</h1>
                    {/* <h1 className=''>Numri i kartelës:</h1> */}




            </div>
            </div>

        </Layout>
    )
}
