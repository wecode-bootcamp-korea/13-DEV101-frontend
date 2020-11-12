import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow({ type, onClick }) {
  const next = type === "next";
  return (
    <button type={type} onClick={onClick} className={next ? "nextArrowRight" : "prevArrowLeft"}>
      {next ? <IoIosArrowForward size={24} /> : <IoIosArrowBack size={24} />}
    </button>
  );
}

const bannerSlideSettings = {
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  draggable: true,
  dots: false,
};

const SearchBanner = () => {
  return (
    <div>
      <StyledBannerSlider
        {...bannerSlideSettings}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        <img src="/Images/banner1.jpg" alt="banner" className="slideBanner" />
        <img src="/Images/banner2.jpg" alt="banner" className="slideBanner" />
      </StyledBannerSlider>
    </div>
  );
};

export default SearchBanner;

const StyledBannerSlider = styled(Slider)`
  width: 1176px;
  height: 150px;
  overflow: unset;
  position: relative;

  .nextArrowRight {
    position: absolute;
    bottom: 39%;
    right: -51px;
    z-index: 9;
    color: #1c1d1e;
    cursor: pointer;
    opacity: 1;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border-radius: 3px;
      color: rgb(27, 28, 29);
      background-color: rgb(248, 248, 249);
      transition: background-color 0.1s ease 0s;
    }
  }

  .prevArrowLeft {
    position: absolute;
    bottom: 39%;
    left: -51px;
    z-index: 9;
    color: #1c1d1e;
    cursor: pointer;
    opacity: 1;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      border-radius: 3px;
      color: rgb(27, 28, 29);
      background-color: rgb(248, 248, 249);
      transition: background-color 0.1s ease 0s;
    }
  }
`;
