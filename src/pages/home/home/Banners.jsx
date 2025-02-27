import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slides from "./Slides";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '/Img1.png'
import img2 from '/Img2.png'
import img3 from '/Img3.png'

const Banners = () => {
    console.log(img1)

    return (
        <div>
            <Swiper centeredSlides={true} spaceBetween={30} autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
                pagination={{ clickable: true, }} navigation={true}
                modules={ [Autoplay, Pagination, Navigation] }
                className="mySwiper">
                <SwiperSlide>
                    <Slides img={img1}></Slides>
                </SwiperSlide>
                <SwiperSlide>
                    <Slides img={img2}></Slides>
                </SwiperSlide>
                <SwiperSlide>
                    <Slides img={img3}></Slides>
                </SwiperSlide>
                

            </Swiper>

        </div>
    );
};

export default Banners;