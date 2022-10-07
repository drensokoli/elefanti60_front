import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import { CartContexts } from '../../contexts/CartContexts';

export const getServerSideProps = async (id) => {
   
    const https = require("https");
    const myUrl = `https:/localhost:7277/api/products/{id}`;
    const agent = new https.Agent({rejectUnauthorized: false})
    const productsRes = await fetch(myUrl, { agent });
    const productsData = await productsRes.json();
    console.log(productsData);
  
    return{
      props: {
       productsData,
      },
    };
  }

export default function ProductScreen({productsData}) {

   

    return (
        <Layout >            

        </Layout>
    )
}
