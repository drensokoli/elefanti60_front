import React from "react";
import Link from "next/link";
import { UilTimesCircle } from '@iconscout/react-unicons'
import moment from 'moment';
import { useRouter } from "next/router";

const CartItem = ({ title, desc, id, productId, price, image, quantity, total, stock }) => {

    const router = useRouter();
    const removeCartItem = async () => {
        const response = await fetch(`https://localhost:7277/api/CartItems/`+ id, {
            method: 'DELETE'
        })
        router.reload();

    }
    let inStock;
    if (stock == 0) {
        inStock = "Out of stock";
    }
    else {

        inStock = "Stock: " + stock;
    }
    console.log(stock, "stock test");

    return (
        <>
            <div>
                <div className="relative">
                    <div className="absolute right-1 top-1">
                    <div onClick={removeCartItem}><UilTimesCircle /></div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row h-fit lg:w-[1100px] lg:gap-30 bg-white rounded-lg border border-gray-200 shadow-md justify-around pb-5">
                    <div className='flex flex-col items-center justify-center p-10 justify-items-center'>
                        <Link href={`/product/${productId}`}>
                            <a className="h-40">
                                <img src={image} alt="" />
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-col mt-3 justify-center p-5 gap-2'>
                        <Link href={`/product/${id}`}>
                            <div className="flex flex-row justify-between">
                                <h5 class=" text-xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                                <p className=" text-xl font-mediium tracking-tight text-gray-700">${price}</p>
                            </div>

                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-500">{desc}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">{inStock}</p>
                        <div className="flex flex-row justify-between items-start sm:gap-20">
                            <div className="flex flex-col justify-center items-start">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">Quantity: {quantity}</p>
                            </div>
                            <div>
                                <h5 class=" text-xl font-bold tracking-tight text-gray-700 ">Total: ${total}</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default CartItem;