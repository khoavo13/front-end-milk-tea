import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import { banslide1, banslide2, banslide3, banslider4 } from '../../../assets/images';


const items = [
    {
        key: 1,
        src: banslide1,
        alt: 'Slide0'
    },
    {
        key: 2,
        src: banslide2,
        alt: 'Slide1'
    },
    {
        key: 3,
        src: banslide3,
        alt: 'Slide3'
    },
    {
        key: 4,
        src: banslider4,
        alt: 'Slide4'
    }
];

export default function BannerSlide() {
    return (
        <div className="carousel-container">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="brandslide"
            >
                {items.map((item) => (
                    <SwiperSlide key={item.key}>
                        <img src={item.src} alt={item.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
