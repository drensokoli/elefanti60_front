import React from "react";
import Link from "next/link";

const OrderItem = ({ title, desc, id, productId, price, image, date, quantity }) => {
    return (
        <>
            <div class="flex flex-col sm:flex-row h-fit lg:w-[1100px] lg:gap-30 bg-white rounded-lg border border-gray-200 shadow-md justify-around pb-5">
                <div className='flex flex-col items-center justify-center p-10 justify-items-center'>
                    <Link href={`/product/${productId}`}>
                        <a className="h-40">
                            <img src={image} alt="" />
                        </a>
                    </Link>
                </div>
                <div className='flex flex-col mt-3 justify-center p-5 gap-2'>
                    <Link href={`/product/${productId}`}>
                        <div className="flex flex-row justify-between">
                            <h5 class=" text-xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                            <p className=" text-xl font-mediium tracking-tight text-gray-700">${price}</p>
                        </div>

                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-500">{desc}</p>
                    <div className="flex flex-row justify-between items-center gap-20">

                        <div className="flex flex-col justify-start items-center">
                            <h5 class=" text-l tracking-tight text-gray-900 ">Date:</h5>
                            <h5 class=" text-l tracking-tight text-gray-900 ">{date}</h5>
                        </div>
                        <div className="flex flex-col justify-end items-center">
                                <h5 class=" text-xl font-bold tracking-tight text-gray-900 ">Quantity: {quantity}</h5>
                            <h5 class=" text-xl font-bold tracking-tight text-gray-900 ">Total: {price*quantity}</h5>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default OrderItem;