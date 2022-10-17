import React, { useContext } from "react";
import Link from "next/link";
import { CartContexts } from "../contexts/CartContexts";
import { useRouter } from "next/router";

//Merr id-ne e user-it
export function getId() {
    const id = useContext(CartContexts);
    return id;
}

//Ruan nje produkt 
const SinglePost = ({ title, id, price, image, stock }) => {

    const router = useRouter()

    let inStock; //Kontrollon nese produkti eshte ne dispozicion 
    if (stock == 0) {
        inStock = "Nuk ka në dispozicion";
    } else {
        inStock = "Stoku: " + stock;
    }

    //Kur klikohet butoni shto ne shporte, nese perdoruesi nuk eshte i kycur, e redirect-on tek faqja e login-it, ne te kunderten e dergon produktin te shporta
    const redirect = async (event) => {
        event.preventDefault();
        if (localStorage.getItem('id') == null) {
            alert("Nuk jeni të kyçur!")
            router.push("http://localhost:3000/login")
        }

        const data = {
            userId: localStorage.getItem('id'),
            productId: id,
            quantity: 1,
        }

        const jsonData = JSON.stringify(data);
        const endpoint = 'https://localhost:7277/api/CartItems';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData,
        }

        const response = await fetch(endpoint, options);
        try {
            if (response.ok) {
                alert("Produkti u shtua në shportën e blerjes me sukses!")
            }
            else if (localStorage.getItem('id') == "null") {
                alert("Nuk jeni të kyçur")
            }
            else {
                alert("Nuk mund të porositni më shumë nga ky produkt")
            }
        }
        catch (ex) {
            console.log(ex);
        }
    }
    return (

        <>
            <div class="flex h-[400px] w-70 flex-col max-w-sm bg-white rounded-lg border border-gray-200 shadow-md justify-items-center pb-5 ">
                <div className='flex flex-col items-center justify-center p-10 justify-items-center'>
                    <Link href={`/product/${id}`}>
                        <a className="h-36 items-center justify-center flex flex-row">
                            <img src={image} alt="" className=" h-36"/>
                        </a>
                    </Link>
                </div>
                <div className='flex flex-col mt-3 justify-center p-5'>
                    <Link href={`/product/${id}`}>
                        <div className="flex flex-row justify-between">
                            <h5 class=" text-xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                            <p className=" text-xl font-mediium tracking-tight text-gray-700">${price}</p>
                        </div>

                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">{inStock}</p>
                    <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 " onClick={redirect}>Shto në shportë</button>

                </div>
            </div>
        </>

    )
}
export default SinglePost;