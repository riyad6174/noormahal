import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
const EventsSection = () => {
  return (
    <div className="bg-primary">
      <div className="flex items-center justify-center flex-col text-3xl font-primaryFont py-10">
        <p className="text-secondary">wedding</p>
        <p>real events</p>
      </div>
      <Swiper
        spaceBetween={60}
        slidesPerView={1}
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
            <div className="grid grid-cols-2 gap-6">
              <div className=" flex items-center justify-center flex-col px-20">
                <p className="text-3xl font-primaryFont">Jaskirath & Sahiba</p>
                <p className="text-sm">
                  "No words can explain the positivity and serenity this place
                  imbibes. The aura of the place and the staff is the true being
                  of this place. from the venues for functions to the
                  maintenance of the intricate detailing to the staff members,
                  we have been lucky to have chosen this venue. Within 3 hrs
                  from Delhi, you can reach this heavenly abode. The hotel has
                  all facilities from a salon to laundry to in house vendors for
                  light, sound, decor, photographers and they all make an
                  excellent team.. this place has been discovered by very few
                  but surely a beautiful destination wedding venue. The hotel is
                  as good as new with excellent food and a beautiful vibe. We
                  have had the most beautiful 2 days of our lives and will be
                  definitely unforgettable."
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/4307734/pexels-photo-4307734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <div className=" flex items-center justify-center flex-col px-20">
                <p className="text-3xl font-primaryFont">Jaskirath & Sahiba</p>
                <p className="text-sm">
                  "No words can explain the positivity and serenity this place
                  imbibes. The aura of the place and the staff is the true being
                  of this place. from the venues for functions to the
                  maintenance of the intricate detailing to the staff members,
                  we have been lucky to have chosen this venue. Within 3 hrs
                  from Delhi, you can reach this heavenly abode. The hotel has
                  all facilities from a salon to laundry to in house vendors for
                  light, sound, decor, photographers and they all make an
                  excellent team.. this place has been discovered by very few
                  but surely a beautiful destination wedding venue. The hotel is
                  as good as new with excellent food and a beautiful vibe. We
                  have had the most beautiful 2 days of our lives and will be
                  definitely unforgettable."
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/7686327/pexels-photo-7686327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <div className=" flex items-center justify-center flex-col px-20">
                <p className="text-3xl font-primaryFont">Shakshi & Sandip</p>
                <p className="text-sm">
                  "No words can explain the positivity and serenity this place
                  imbibes. The aura of the place and the staff is the true being
                  of this place. from the venues for functions to the
                  maintenance of the intricate detailing to the staff members,
                  we have been lucky to have chosen this venue. Within 3 hrs
                  from Delhi, you can reach this heavenly abode. The hotel has
                  all facilities from a salon to laundry to in house vendors for
                  light, sound, decor, photographers and they all make an
                  excellent team.. this place has been discovered by very few
                  but surely a beautiful destination wedding venue. The hotel is
                  as good as new with excellent food and a beautiful vibe. We
                  have had the most beautiful 2 days of our lives and will be
                  definitely unforgettable."
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/12820734/pexels-photo-12820734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <div className=" flex items-center justify-center flex-col px-20">
                <p className="text-3xl font-primaryFont">Akriti & Vasan</p>
                <p className="text-sm">
                  "No words can explain the positivity and serenity this place
                  imbibes. The aura of the place and the staff is the true being
                  of this place. from the venues for functions to the
                  maintenance of the intricate detailing to the staff members,
                  we have been lucky to have chosen this venue. Within 3 hrs
                  from Delhi, you can reach this heavenly abode. The hotel has
                  all facilities from a salon to laundry to in house vendors for
                  light, sound, decor, photographers and they all make an
                  excellent team.. this place has been discovered by very few
                  but surely a beautiful destination wedding venue. The hotel is
                  as good as new with excellent food and a beautiful vibe. We
                  have had the most beautiful 2 days of our lives and will be
                  definitely unforgettable."
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/8817899/pexels-photo-8817899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default EventsSection;
