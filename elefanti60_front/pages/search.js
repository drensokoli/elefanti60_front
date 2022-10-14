import React, { useContext } from 'react'
import Layout from '../components/Layout';
import { SearchContext } from '../contexts/SearchContext';



export default function search() {

    const products = useContext(SearchContext);

    console.log(products);
  return (
    <>
    <Layout>
        <div>{products}</div>
    </Layout>
    </>
  )
}
