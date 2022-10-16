import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide5 from '../assets/slide5.jpg'
import slide6 from '../assets/slide6.jpg'
import Image from 'next/image'
import Slider from 'react-slick'

const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Image src={slide3}
                        class="block w-full" />
                </div>
                <div>
                    <Image src={slide1}
                        class="block w-full" />
                </div>
                <div>   <Image src={slide2}
                    class="block w-full" />
                </div>
                <div>   <Image src={slide5}
                    class="block w-full" />
                </div>
                <div>   <Image src={slide6}
                    class="block w-full" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;