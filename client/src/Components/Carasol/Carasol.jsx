import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import images
import img1 from './iist-computer-mission-banner.png';
import img2 from './higher-education-Mission.png';

const Carasol = () => {
  const [caraImg, setImage] = useState([]);

  useEffect(() => {
    // Set the image array to state
    setImage([img1, img2]);
  }, []);

  return (
    <>
    <section className="hero-cara">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {caraImg.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt={`carousel-image-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </>
  );
};

export default Carasol;
