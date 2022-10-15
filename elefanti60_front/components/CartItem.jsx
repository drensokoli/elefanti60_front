import React, { useContext } from "react";
import Link from "next/link";
import { CartContexts } from "../contexts/CartContexts";
import Image from "next/image";
import telefon from '../assets/telefon.jpg'

const CartItem = ({ title, desc, id, category, price, image, quantity, total }) => {
    // const { products, setProducts } = useContext(CartContexts);
    return (
<>
        <div class="flex flex-col sm:flex-row h-fit lg:w-[1100px] lg:gap-30 bg-white rounded-lg border border-gray-200 shadow-md justify-around pb-5">
            <div className='flex flex-col items-center justify-center p-10 justify-items-center'>
                <Link href={`/product/${id}`}>
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
                <div className="flex flex-row justify-between items-center gap-20">

                    {/* <select id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        <option selected="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select> */}
                    {quantity}

                    <h5 class=" text-xl font-bold tracking-tight text-gray-900 ">Total: ${price * quantity}</h5>
                </div>

            </div>
        </div>

        </>
    )
}
export default CartItem;