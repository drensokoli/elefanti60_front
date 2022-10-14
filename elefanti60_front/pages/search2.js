import Layout from '../components/Layout';
import { withRouterProps } from 'next/router'

// export async function getServerSideProps(context) {

//   const { params } = context;
//   //const { slug } = params;
   
//     const https = require("https");
//     const myUrl = `https://localhost:7277/api/Products/Category/${slug}`;    
//     const agent = new https.Agent({rejectUnauthorized: false})
//     const productsRes = await fetch(myUrl, { agent });
//     const productsData = await productsRes.json();
//     const categoriesRes = await fetch('https://localhost:7277/api/Categories', { agent });
//     const categoriesData = await categoriesRes.json();
  
//     return{
//       props: {
//        productsData,
//        categoriesData
//       },
//     };
//   }

export default function search() {

   // const products = useContext(SearchContext);

  //  console.log(products);
  return (
    <>
    <Layout>
        {/* <div>{products}</div> */}lskfejnead
    </Layout>
    </>
  )
}