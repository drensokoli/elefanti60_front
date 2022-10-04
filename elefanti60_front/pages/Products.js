import Head from "next/head";
import Productcard from "../components/productcard";

export const getServerSideProps = async () => {
    const productsRes = await fetch('https://fakestoreapi.com/products?limit=5');
    const productsData = await productsRes.json();

    return {
        props: {
            productsData,
        },
    };
};


  
export default function Products({ productsData }) {

    const allProducts = productsData.map((p) => (
    <Productcard
        key={p.id}
        title={p.title} 
        cat={p.category} 
        desc={p.description} 
        pri={p.price} 
        imzh={p.image} 
        id={p.id}/>));

    return (
    <div className="">
        <main className="">{allProducts}</main>
    </div>
    );
}

