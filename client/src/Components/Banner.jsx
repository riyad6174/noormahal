import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper'
import 'swiper/css';
import image1 from '../assets/Images/_JAN2760.jpg'
import image2 from '../assets/Images/_JAS9736.jpg'
import image3 from '../assets/Images/home_banner1.jpg'
import image4 from '../assets/Images/home_banner6.jpg'
import image5 from '../assets/Images/home_banner3.jpg'
import image6 from '../assets/Images/banners1.jpg'
const Banner = () => {

  
  SwiperCore.use([Autoplay])
  return (
    <div className='w-full relative'>
 <Swiper
     
      slidesPerView={1}
      autoplay={{
        delay:3000
      }}
    >
      <SwiperSlide><img className='object-center object-cover w-full ' src={image1} alt="" /></SwiperSlide>
      <SwiperSlide><img className='object-center object-cover w-full ' src={image2} alt="" /></SwiperSlide>
      <SwiperSlide><img className='object-center object-cover w-full ' src={image3} alt="" /></SwiperSlide>
      <SwiperSlide><img className='object-center object-cover w-full ' src={image4} alt="" /></SwiperSlide>
      <SwiperSlide><img className='object-center object-cover w-full ' src={image5} alt="" /></SwiperSlide>
      <SwiperSlide><img className='object-center object-cover w-full ' src={image6} alt="" /></SwiperSlide>
     
    </Swiper>
    <div className=' absolute right-72 top-72 z-50'>
             <button className='px-16 py-4 font-primaryFont bg-primary text-2xl hover:text-gray-600 transition shadow-lg'>Book Now</button>
    </div>
    </div>
  )
}


export default Banner