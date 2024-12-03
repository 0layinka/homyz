import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './residencies.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        {/* Section Header */}
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* Swiper Carousel */}
        <Swiper {...sliderSettings}>
          {/* Pass SliderButtons inside Swiper */}
          <SliderButtons />
          {data?.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img 
                  src={card.image} 
                  alt={card.name} 
                  className="r-image"
                />
                <div className="secondaryText r-price">
                  <span style={{ color: 'orange' }}>$</span>
                  <span>{card.price}</span>
                </div>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
