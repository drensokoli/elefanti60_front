import Image from "next/image";
import logo2 from '../assets/logo2.png'
const Footer = () => {
    return (

        <footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900 mb-0">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <a className='w-28'>
                    <Image src={logo2} />
                </a>
                <ul class="flex flex-wrap items-center mb-6 lg:mb-0 text-sm text-gray-300">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Për ne</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Politika e privatësisë</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Kontakti</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 text-center dark:text-gray-400">© 2022 Elefanti60. Të gjitha të drejtat e rezervuara.
            </span>
        </footer>

    )
}

export default Footer;