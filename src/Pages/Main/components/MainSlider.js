import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { mainSliderData } from "../Data";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

const MainSlider = () => {
  const [mainBannerData, setMainBannerData] = useState([]);
  useEffect(() => {
    setMainBannerData(mainSliderData);
  }, []);

  return (
    <MainSliderWrapper>
      <Swiper slidePesView={1} autoplay={{ delay: 5000, disableOnInteraction: false }}>
        {mainBannerData.map((banner, idx) => {
          const { id, imgSrc, title, description } = banner;
          return (
            <SwiperSlide key={id}>
              <Slide backgroundURL={imgSrc}>
                <div className="blurBackground"></div>
                <img alt="mainBanner" src={imgSrc} />
                <div>
                  <div className="textBox">
                    <p dangerouslySetInnerHTML={{ __html: `${title}` }} />
                    <p dangerouslySetInnerHTML={{ __html: `${description}` }} />
                  </div>
                  <span>
                    {idx + 1}/{mainBannerData.length}
                  </span>
                  <span className="progressBar"></span>
                </div>
              </Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </MainSliderWrapper>
  );
};

const scrollBarAni = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1)
  }
`;

const MainSliderWrapper = styled.div`
  margin: 130px 0 150px;
  position: relative;
  .swiper-container {
    overflow: unset !important;
    .swiper-slide-active {
      .progressBar {
        :after {
          animation: ${scrollBarAni} 5s;
        }
      }
    }
  }
`;

const Slide = styled.div`
  height: 450px;
  position: relative;
  img {
    padding-right: 15px;
  }
  div {
    position: absolute;
    width: 45%;
    right: 0;
    height: 100%;
    overflow: hidden;

    &.blurBackground {
      width: 100%;
      height: 100%;
      background: url(${(props) => props.backgroundURL}) no-repeat 50% 50% / cover;
      filter: blur(4px);

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        opacity: 0.4;
      }
    }

    .textBox {
      position: absolute;
      top: 90px;
      left: 0;
      width: 600px;
      font-size: 24px;
      line-height: 1.5;
      font-weight: 700;
      color: white;

      p {
        &:first-child {
          font-size: 34px;
          padding-bottom: 15px;
        }

        &:last-child {
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }
      }
    }

    span {
      position: absolute;
      left: 0;
      bottom: 50px;
      color: #fff;
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 0.4em;
      transform: translateY(30%);

      &.progressBar {
        position: absolute;
        width: 350px;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.5);
        left: 50px;
        bottom: 50px;
        transform: translateY(0);

        &:after {
          content: "";
          left: 0;
          right: 0;
          top: 0;
          height: 100%;
          display: block;
          background-color: #fff;
          transform-origin: left top;
        }
      }
    }
  }

  img {
    position: absolute;
    left: 35%;
    bottom: -40px;
    transform: translateX(-50%);
    width: 676px;
    height: 415px;
  }
`;

export default MainSlider;
