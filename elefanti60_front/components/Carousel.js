import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import Image from 'next/image'
import slide3 from '../assets/slide3.jpg'

const Carousel = () => {

    return (


        <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item  relative float-left w-full">

                    <Image src={slide1}
                        class="block w-full" />
                </div>
                <div class="carousel-item active relative float-left w-full">

                    <Image src={slide2}
                        class="block w-full" />
                </div>
                <div class="carousel-item relative float-left w-full">

                    <Image src={slide3}
                        class="block w-full" />
                </div>
            </div>
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>




        // <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
        //     <div class="carousel-inner relative w-full overflow-hidden">
        //         <div class="carousel-item active relative float-left w-full">
        //             <Image src={slide1}
        //                 class="block w-full" />
        //         </div>
        //         <div class="carousel-item active relative float-left w-full">
        //             <Image src={slide2}
        //                 class="block w-full" />
        //         </div>
        //         <div class="carousel-item active relative float-left w-full">
        //             <Image src={slide3}
        //                 class="block w-full" />
        //         </div>
        //     </div>
        // </div>

        // <div id="animation-carousel" class="relative" data-carousel="">
        //     <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        //         <div class="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="active">
        //             <Image src={slide1} />
        //         </div>
        //         <div class="duration-000 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
        //             <Image src={slide2} />
        //         </div>
        //         <div class="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
        //             <Image src={slide2} />
        //         </div>
        //         <div class="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
        //             <Image src={slide2} />
        //         </div>
        //         <div class="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
        //             <Image src={slide1} />
        //         </div>
        //     </div>
        //     <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
        //         <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        //             <span class="sr-only">Previous</span>
        //         </span>
        //     </button>
        //     <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
        //         <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //             <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        //             <span class="sr-only">Next</span>
        //         </span>
        //     </button>
        // </div>
    );
}

export default Carousel;