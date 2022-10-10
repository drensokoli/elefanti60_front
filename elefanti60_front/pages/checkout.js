import Layout from "../components/Layout";
import { useRouter } from "next/router";
export default function CheckOut() {
    const router = useRouter();
    return (
        <Layout  title="Shopping Cart">
           <div className= 'inline-block'>
           <h1 clasName='mb-4 text-xl'>Congratulations!!!!</h1>
            <h2> You have made your purchase. Want to shop some more?</h2>
            <button onClick={() => router.push('/')}
            className= " bg-violet-600 text-white	rounded-md text-md py-1 px-3">
               Go Back
                </button>

            </div> 
            </Layout>
    );
}