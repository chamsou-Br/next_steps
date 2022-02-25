// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react';

const SwiperCoverLetter = () => {

  const [width, setWidth] = useState(0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className='container-snap flex justify-center '>
    <Swiper
       spaceBetween={10}
       slidesPerView={width > 1024 ? 3 : (width > 768 ? 2 : 1)}
       activeIndex="2"
       modules={[ Pagination, Autoplay]}
       autoplay={{
        delay: 3000,
        disableOnInteraction: true,
    }}

    pagination={{ clickable: true }}
       className=" m-auto text-center mb-20 "
    >
      <SwiperSlide className=' flex justify-center'>
        <div className='w-11/12 sm:w-72  relative'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
          <img src="/coverLetter.jpg" className='w-full sm:w-72 text-center  shadow-lg' />
        </div>
      </SwiperSlide>
      <SwiperSlide className=' flex justify-center'>
      <div className='w-11/12 sm:w-72 relative m-auto'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
          <img src="/coverLetter2.jpg" className='w-full sm:w-72 shadow-lg' />
        </div>
      </SwiperSlide>
      <SwiperSlide className=' flex justify-center'>
      <div className=' w-11/12 sm:w-72 relative'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
            <img src="/coverLetter2.png" className=' w-full sm:w-72  shadow-lg' />
          </div>
        </SwiperSlide>
      <SwiperSlide className=' flex justify-center'>
      <div className=' w-11/12 sm:w-72 relative'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
            <img src="/coverLetter3.png" className=' w-full sm:w-72  shadow-lg' />
          </div>
      </SwiperSlide>
      <SwiperSlide className=' flex justify-center'>
      <div className=' w-w-11/12 sm:w-72  relative'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
            <img src="/coverLetter4.jpg" className=' w-full sm:w-72  shadow-xl' />
          </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default SwiperCoverLetter