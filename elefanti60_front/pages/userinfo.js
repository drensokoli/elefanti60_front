import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function UserInfoScreen(){
    return ( 
        <Layout title="User Info">
            <div className="border-black flex flex-col items-center mt-10 ">
                    <h2 className='text-3xl	text-left text-blue-500'>Të dhënat e profilit</h2>
                    <h3>Informatat e llogarisë tuaj</h3>
                    <h3>Email: elona@gjirafa.com</h3>
                    
            </div>
        </Layout>
    )
}
