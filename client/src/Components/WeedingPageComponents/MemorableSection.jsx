import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
const MemorableSection = () => {
  return (
    <div className="">
      <div
        data-aos="zoom-out-up"
        data-aos-duration="3000"
        className="flex items-center justify-center flex-col text-3xl font-primaryFont py-10"
      >
        <p className="text-secondary">plan your </p>
        <p>Memorable Events</p>
        <p className="text-sm px-20 ">
          Get set to garner accolades from your guests for hosting the perfect
          event in our spacious ball rooms. Equipped with latest
          state-of-the-art facilities and having a flair for warm hospitality,
          we ensure that you have memorable celebrations.{" "}
        </p>
      </div>
      <Swiper
        spaceBetween={60}
        slidesPerView={1}
        // centeredSlides={true}
        autoplay={{
          delay: 250000,
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
              <div className="grid grid-cols-2 gap-6 bg-primary">
                <div className=" flex items-center  justify-center flex-col px-20">
                  <div className="border-2 border-footer bg-primary py-10 px-10 opacity-80">
                    <p className="uppercase py-6">Darbar hall</p>
                    <p className=" text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis facilis eaque molestiae earum alias
                      accusantium deleniti commodi blanditiis totam dignissimos.
                      Ratione nesciunt excepturi earum soluta quibusdam
                      voluptatum. Ea, culpa odit?
                    </p>
                    <button className="bg-footer uppercase px-6 text-white mt-6">
                      View gallary
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/11564871/pexels-photo-11564871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2  bg-primary py-10 mt-4 uppercase text-lg font-primaryFont">
                <div>
                  <p>total capacity</p>
                  <p>700</p>
                </div>
                <div>
                  <p>Seating capacity</p>
                  <p>3200</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="grid grid-cols-2 gap-6 bg-primary">
                <div className=" flex items-center  justify-center flex-col px-20">
                  <div className="border-2 border-footer bg-primary py-10 px-10 opacity-80">
                    <p className="uppercase py-6">Darbar hall</p>
                    <p className=" text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis facilis eaque molestiae earum alias
                      accusantium deleniti commodi blanditiis totam dignissimos.
                      Ratione nesciunt excepturi earum soluta quibusdam
                      voluptatum. Ea, culpa odit?
                    </p>
                    <button className="bg-footer uppercase px-6 text-white mt-6">
                      View gallary
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/5157660/pexels-photo-5157660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2  bg-primary py-10 mt-4 uppercase text-lg font-primaryFont">
                <div>
                  <p>total capacity</p>
                  <p>800</p>
                </div>
                <div>
                  <p>Seating capacity</p>
                  <p>1500</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="grid grid-cols-2 gap-6 bg-primary">
                <div className=" flex items-center  justify-center flex-col px-20">
                  <div className="border-2 border-footer bg-primary py-10 px-10 opacity-80">
                    <p className="uppercase py-6">Sheesh mahal</p>
                    <p className=" text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis facilis eaque molestiae earum alias
                      accusantium deleniti commodi blanditiis totam dignissimos.
                      Ratione nesciunt excepturi earum soluta quibusdam
                      voluptatum. Ea, culpa odit?
                    </p>
                    <button className="bg-footer uppercase px-6 text-white mt-6">
                      View gallary
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/8583978/pexels-photo-8583978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2  bg-primary py-10 mt-4 uppercase text-lg font-primaryFont">
                <div>
                  <p>total capacity</p>
                  <p>900</p>
                </div>
                <div>
                  <p>Seating capacity</p>
                  <p>4200</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="grid grid-cols-2 gap-6 bg-primary">
                <div className=" flex items-center  justify-center flex-col px-20">
                  <div className="border-2 border-footer bg-primary py-10 px-10 opacity-80">
                    <p className="uppercase py-6">Darbar hall</p>
                    <p className=" text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis facilis eaque molestiae earum alias
                      accusantium deleniti commodi blanditiis totam dignissimos.
                      Ratione nesciunt excepturi earum soluta quibusdam
                      voluptatum. Ea, culpa odit?
                    </p>
                    <button className="bg-footer uppercase px-6 text-white mt-6">
                      View gallary
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2  bg-primary py-10 mt-4 uppercase text-lg font-primaryFont">
                <div>
                  <p>total capacity</p>
                  <p>800</p>
                </div>
                <div>
                  <p>Seating capacity</p>
                  <p>3000</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default MemorableSection;
