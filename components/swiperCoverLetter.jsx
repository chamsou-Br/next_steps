// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';

const SwiperCoverLetter = () => {
  return (
    <div className='container-snap flex justify-center w-screen'>
    <Swiper
       spaceBetween={0}
       slidesPerView={3}
       activeIndex="1"
       className=' hidden md:block'
    >
      <SwiperSlide className=''>
        <div className=' w-72 relative'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
          <img src="/coverLetter.jpg" className=' w-72 shadow-lg' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' w-72 relative'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
          <img src="/coverLetter2.jpg" className=' w-72 shadow-lg' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' w-72 relative'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
            <img src="/coverLetter2.png" className=' w-72 shadow-lg' />
          </div>
        </SwiperSlide>
      <SwiperSlide>
      <div className=' w-72 relative'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
            <img src="/coverLetter3.png" className=' w-72 shadow-lg' />
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' w-72 relative'>
          <div className=' absolute top-0 left-0 w-full h-full opacity-0  flex justify-center m-auto hover:opacity-100   hover:bg-black/[.3] '>
            <div className=' m-auto text-center text-white font-bold text-lg tracking-wider bg-blue-500 px-7 py-3 shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:text-blue-500 '>
               Select Template 
            </div>
          </div>
            <img src="/coverLetter4.jpg" className=' w-72 shadow-xl' />
          </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default SwiperCoverLetter