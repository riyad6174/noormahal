import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import image1 from "../assets/Images/_JAN2760.jpg";
import image2 from "../assets/Images/_JAS9736.jpg";
import image3 from "../assets/Images/home_banner1.jpg";
import image4 from "../assets/Images/home_banner6.jpg";
import image5 from "../assets/Images/home_banner3.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const SuitsSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <div className="mt-6 py-10">
            <div className="border border-2 border-secondary ">
              <img
                className="object-center object-cover w-full border-t border-4 border-secondary"
                src={image1}
                alt=""
              />
              <p className="text-2xl font-primaryFont">Presidential Suits</p>
            </div>
            <div className="flex items-center  space-x-4 py-4 justify-center">
              <button className="border border-secondary uppercase text-xs text-secondary px-4">
                Explore
              </button>
              <button className="border border-black bg-black uppercase text-xs text-secondary px-4">
                Book
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-6 py-10">
            <div className="border border-2 border-secondary">
              <img
                className="object-center object-cover w-full border-t border-4 border-secondary"
                src={image2}
                alt=""
              />
              <p className="text-2xl font-primaryFont">Club Royal room</p>
            </div>
            <div className="flex items-center space-x-4 py-4 justify-center">
              <button className="border border-secondary uppercase text-xs text-secondary px-4">
                Explore
              </button>
              <button className="border border-black bg-black uppercase text-xs text-secondary px-4">
                Book
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-6 py-10">
            <div className="border border-2 border-secondary">
              <img
                className="object-center object-cover w-full border-t border-4 border-secondary"
                src={image3}
                alt=""
              />
              <p className="text-2xl font-primaryFont">Club Rooms</p>
            </div>
            <div className="flex items-center space-x-4 py-4 justify-center">
              <button className="border border-secondary uppercase text-xs text-secondary px-4">
                Explore
              </button>
              <button className="border border-black bg-black uppercase text-xs text-secondary px-4">
                Book
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-6 py-10">
            <div className="border border-2 border-secondary">
              <img
                className="object-center object-cover w-full border-t border-4 border-secondary"
                src={image4}
                alt=""
              />
              <p className="text-2xl font-primaryFont">Luxury Plus</p>
            </div>
            <div className="flex items-center space-x-4 py-4 justify-center">
              <button className="border border-secondary uppercase text-xs text-secondary px-4">
                Explore
              </button>
              <button className="border border-black bg-black uppercase text-xs text-secondary px-4">
                Book
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-6 py-10">
            <div className="border border-2 border-secondary">
              <img
                className="object-center object-cover w-full border-t border-4 border-secondary"
                src={image5}
                alt=""
              />
              <p className="text-2xl font-primaryFont">Khwabgah</p>
            </div>
            <div className="flex items-center space-x-4 py-4 justify-center">
              <button className="border border-secondary uppercase text-xs text-secondary px-4">
                Explore
              </button>
              <button className="border border-black bg-black uppercase text-xs text-secondary px-4">
                Book
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SuitsSlider;
