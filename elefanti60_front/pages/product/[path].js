import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data';
import {useRouter} from 'next/router';
import Link from 'next/link';

export default function ProductScreen() {
    const {query} = useRouter();
    const {path} = query;
    const product = data.products.find( x => x.path ===path);
    if(!product){
        return <div> Product Not Found</div>
    }

    return (
        <Layout title={product.name}>
            <div className='py-2'>
                <Link href="/">Go back</Link>
            </div>
        </Layout>
    )
}
