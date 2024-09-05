import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './Gallery.css';

// import images
import gallery1 from '../../Assets/gallery/skill-india.png';
import gallery2 from '../../Assets/gallery/tools.jpg';
import gallery3 from '../../Assets/gallery/vocational-training.jpg';
import gallery4 from '../../Assets/gallery/vocational.jpg';
import gallery5 from '../../Assets/gallery/welding.jpg';
import gallery6 from '../../Assets/gallery/working-women.jpg';

const images = [
    { src: gallery1, alt: "Skill India" },
    { src: gallery2, alt: "Tools" },
    { src: gallery3, alt: "Vocational Training" },
    { src: gallery4, alt: "Vocational" },
    { src: gallery5, alt: "Welding" },
    { src: gallery6, alt: "Working Women" },
];

const Gallery = () => {
    return (
        <>
            <section className="">
                <div className="gallery-container">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={4} // Show 4 images by default
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 2, // Show 1 image on very small screens
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2, // Show 2 images on screens >= 480px
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3, // Show 3 images on screens >= 768px
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5, // Show 4 images on screens >= 1024px
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image.src} alt={image.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Gallery;
