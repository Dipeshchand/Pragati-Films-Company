import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation  } from "swiper/modules";
import "swiper/css";

import img1 from "../../assets/images/g1.jpg";
import img2 from "../../assets/images/g2.jpg";
import img3 from "../../assets/images/g3.jpg";
import img4 from "../../assets/images/g4.jpg";
import img5 from "../../assets/images/g5.jpg";
import img6 from "../../assets/images/g6.jpg";
import img7 from "../../assets/images/g7.jpg";
import img8 from "../../assets/images/g8.jpg";
import img9 from "../../assets/images/g9.jpg";
import img10 from "../../assets/images/g10.jpg";
import img11 from "../../assets/images/g11.jpg";
import img12 from "../../assets/images/g12.jpg";
import img13 from "../../assets/images/g13.jpg";
import img14 from "../../assets/images/g14.jpg";
import img15 from "../../assets/images/g15.jpg";
import img16 from "../../assets/images/g16.jpg";
import img17 from "../../assets/images/g17.jpg";
import img18 from "../../assets/images/g18.jpg";

const images = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
  img11,img12,img13,img14,img15,img16,img17,img18
];
export default function Slider() {
  return (
    <div className="flex ml-10 mt-15">
       <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            
            <div className="relative group overflow-hidden rounded-xl">
              
              {/* Image */}
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-[500px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
