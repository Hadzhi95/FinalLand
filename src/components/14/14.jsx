import React, { useRef } from "react";
import styles from './Land14.scss';
import image1 from './image1.jpg'
import image142 from './image142.jpg'
import image143 from './image-143.png'
import image144 from './image144.png'
import image145 from './image-145.png'
import pepsico from './6.png';
import cisco from './5.png';
import four from './3.png';
import hilton from './1.png';

import pepsicoMobile from './pepsico-mobile.png';
import ciscoMobile from './cisco-mobile.png';
import fourMobile from './four-seasons-mobile.png';
import diplomMobile from './diplom-mobile.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/swiper-bundle.min.css";

function Land14() {
  const [swiper, setSwiper] = React.useState(null);
  const slidePrev = () => {
    swiper.slidePrev();
  };
  const slideNext = () => {
    swiper.slideNext();
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          Our graduates are employed in
        </div>
        <div className={styles.row}>
          <div className={styles.swiper}>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              onSwiper={(s) => {
                setSwiper(s);
              }}
              navigation
              pagination={{ clickable: true }}
              loop
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
              }}
            >
              <SwiperSlide key={Math.random()}>
                <img className={styles.image} src={image1} />
              </SwiperSlide>
              <SwiperSlide key={Math.random()}>
                <img className={styles.image} src={image142} style={{ width: "1070px", height: "713px" }} />
              </SwiperSlide>
              <SwiperSlide key={Math.random()}>
                <img className={styles.image} src={image143} style={{ width: "1070px", height: "713px" }} />
              </SwiperSlide>
              <SwiperSlide key={Math.random()}>
                <img className={styles.image} src={image144} style={{ width: "1070px", height: "713px" }} />
              </SwiperSlide>
              <SwiperSlide key={Math.random()}>
                <img className={styles.image} src={image145} style={{ width: "1070px", height: "713px" }} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <img src={diplomMobile} className={styles.diplomMobile} />
        <div className={styles.col}>
          <div className={styles.row1}>
            <img className={styles.invent} src={hilton} alt="" />
            <img className={styles.inv} src={four} alt="" />
            <img className={styles.hiltonMobile} src={hilton} alt="" style={{ width: "250px" }} />
            <img className={styles.fourMobile} src={fourMobile} alt="" />
          </div>
          <div className={styles.row1}>
            <img className={styles.invent} src={cisco} alt="" />
            <img className={styles.inv} src={pepsico} alt="" />
            <img className={styles.ciscoMobile} src={ciscoMobile} alt="" />
            <img className={styles.pepsicoMobile} src={pepsicoMobile} alt="" />

          </div>
        </div>
      </div>
    </>
  );
}

export default Land14;
