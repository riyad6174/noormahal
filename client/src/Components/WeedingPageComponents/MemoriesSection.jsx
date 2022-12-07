// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const MemoriesSection = () => {
  return (
    <div className="px-20 bg-primary">
      <div data-aos="zoom-out-up" data-aos-duration="3000"  className="py-4 font-primaryFont container">
        <p className="text-4xl ">For unforgettable memories</p>
        <p className="">
          The alluring interiors and remarkable amenities surrounding the hotel
          provide an awe-inspiring background for couples who are looking for a
          memorable pre-wedding shoot near New Delhi. Our expert team is
          renowned for planning and executing the shoots impeccably in one of
          the finest pre-wedding venues near Chandigarh which leads to flawless
          results.
        </p>
      </div>
      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        // centeredSlides={true}
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
        <div>
          <SwiperSlide>
            <div>
              <img
                src="https://images.pexels.com/photos/730054/pexels-photo-730054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://images.pexels.com/photos/8887296/pexels-photo-8887296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://images.pexels.com/photos/8887111/pexels-photo-8887111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src="https://images.pexels.com/photos/730054/pexels-photo-730054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="flex items-center justify-center py-10">
        <button className="px-10 py-2 bg-gray-700 text-white">
          Enquire now
        </button>
      </div>
    </div>
  );
};

export default MemoriesSection;
