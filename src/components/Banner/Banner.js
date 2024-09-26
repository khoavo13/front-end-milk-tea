import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './banner.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import images directly
import slide0 from '../../assets/images/slide0.png';
import slide1 from '../../assets/images/slide1.png';
import slide2 from '../../assets/images/slide2.png';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.png';
import slide5 from '../../assets/images/slide5.jpg';


const items = [
  {
    key: 1,
    src: slide0,
    alt: 'Slide0'
  },
  {
    key: 2,
    src: slide1,
    alt: 'Slide1'
  },
  {
    key: 3,
    src: slide2,
    alt: 'Slide2'
  },
  {
    key: 4,
    src: slide3,
    alt: 'Slide3'
  },
  {
    key: 5,
    src: slide4,
    alt: 'Slide4'
  },
  {
    key: 6,
    src: slide5,
    alt: 'Slide5'
  }
];

export default function Banner() {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.key}>
            <img src={item.src} alt={item.alt} style={{ width: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
