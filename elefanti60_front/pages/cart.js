import Layout from '../components/Layout';
import CartItem from '../components/CartItem';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

export default function Cart() {
    
    const router = useRouter();
    const[isLoading, setIsLoading] = useState(true);  //Kontrollon nese te dhenat jane marre nga useEffect
    const[cartData, setCartData] = useState(null);  //Ruan te dhenat e marra nga endpoint-i
   
     //Merr produktet e porositura kur klikohet butoni checkout dhe i dergon te endpointi per te bere porosine e produkteve
     async function handleCheckout(event){
        
        event.preventDefault()
        const data = {
            userId: localStorage.getItem('id')
        }
    
        const jsonData = JSON.stringify(data);
       
        const endpoint = `https://localhost:7277/api/OrderItems/`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonData
        }
            
        const response = await fetch(endpoint, options);
        if(response.ok){
            alert("Porosia u krye me sukses!")
            router.push("/")
        } else {
            alert("Porosia nuk mund të kryhet!")
        }
    }
    
    //Merr nga endpoint-i produktet e shportes
    useEffect(() => {
        async function fetchCartData(){
            const userId = localStorage.getItem('id');
            const https = require("https");
            const agent = new https.Agent({ rejectUnauthorized: false })
            const productsRes = await fetch(`https://localhost:7277/api/ShoppingCarts/` + userId, { agent });
            const productsData = await productsRes.json();
            setCartData(productsData);
            setIsLoading(false)
        }
        fetchCartData()
    }, [])
    
    if(isLoading){
        return (
            <Layout title="Home Page">
                <div className='flex flex-col justify-start gap-8 mt-5'>
                    <h1 className="text-3xl text-blue-700 font-semibold">Shporta e blerjes:</h1>
                    <div className='flex flex-col justify-center items-center gap-5 mb-5'>
                        <h3>Duke u ngarkuar...</h3>
                    </div>
                </div>
    
            </Layout >
        )
    }

    const items = cartData.items;
    const total = cartData.total
    const allProducts = items.map((p) => (<div key={p.id}>
        <CartItem
            title={p.title}
            desc={p.description}
            id={p.id}
            productId = {p.productId}
            image={p.image}
            price={p.price}
            stock={p.stock}
            quantity = {p.quantity}
            category={p.category}
            total = {p.quantity * p.price}/>
    </div>));

    return (
        <Layout title="Home Page">
            <div className='flex flex-col justify-start gap-8 mt-5'>
                <h1 className="text-3xl text-blue-700 font-semibold">Shporta e blerjes:</h1>
                <div className='flex flex-col justify-center items-center gap-5 mb-5'>
                    {allProducts}
                </div>
            <div className='flex flex-col justify-end items-center gap-5 mb-5 '>
                <h1 className='text-2xl font-semibold'>Totali: ${total}</h1>
                <button type="button" class="text-white w-[250px] sm:w-[500px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleCheckout}>Bëje porosinë</button>
            </div>
            </div>

        </Layout >
    )
}