import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import '../css/Main.scss'


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
            >{
                    MAGSSLIDER.map((mag, idx) => {
                        return (
                            <SwiperSlide>

                                <figure className='inner'>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/slide0${idx + 1}.png`} alt="" />
                                </figure>

                            </SwiperSlide>)
                    })}

            </Swiper>

        </section>
    )
}

export default Magslide;