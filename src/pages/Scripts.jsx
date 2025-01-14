import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules'; 
import React, { useContext } from 'react';
import './scripts.css';
import { AppContext } from '../App';
import ScriptSlide from '../components/ScriptSlide';
import Social from '../components/Social';

function Scripts() {
  
  const { data: slides } = useContext(AppContext);
  
  return (
    <>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay:6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop={true}
        className='mySwiper'
      >

        {
          slides && slides.length>0 && slides.map(slide => (
            <SwiperSlide key={slide._id}>
              <ScriptSlide slide={slide} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Social/>
    </>
  );
}

export default Scripts