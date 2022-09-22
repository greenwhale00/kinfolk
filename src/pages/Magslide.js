import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";


const MAGSSLIDER = [
    { id: 1, link: "" },
    { id: 2, link: "" },
    { id: 3, link: "" },
    { id: 4, link: "" },
    { id: 5, link: "" },
    { id: 6, link: "" },
    { id: 7, link: "" },
];

const Magslide = () => {
    return (
        <section className='Magslide'>

            <Swiper
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <figure className='inner'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/slide01.png"} alt="" />
                    </figure>
                </SwiperSlide>


                <SwiperSlide>
                    <figure className='inner'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/slide02.png"} alt="" />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure className='inner'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/slide03.png"} alt="" />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure className='inner'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/slide04.png"} alt="" />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure className='inner'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/slide05.png"} alt="" />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure className='inner'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/slide06.png"} alt="" />
                    </figure>
                </SwiperSlide>

                <SwiperSlide>
                    <figure className='inner'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/slide07.png"} alt="" />
                    </figure>
                </SwiperSlide>

            </Swiper>

        </section>
    )
}

export default Magslide;