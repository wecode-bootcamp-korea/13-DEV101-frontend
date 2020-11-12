import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import MyClassCard from "./MyClassCard";
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

const slickSettings = {
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  draggable: true,
  dots: false,
};

const MyPageSlider = ({ cardDataList, title, likedList }) => {
  return (
    <section className="MyPageSlider">
      <RightContent marginTop={title}>
        <Title>
          <h2>{title}</h2>
        </Title>
        <div>
          <StyledSlider
            className="left-align-slick"
            {...slickSettings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
          >
            {cardDataList &&
              cardDataList.map((cardData) => {
                return <MyClassCard cardWidth={243} {...cardData} likedList={likedList} />;
              })}
          </StyledSlider>
        </div>
      </RightContent>
    </section>
  );
};

export default MyPageSlider;

const StyledSlider = styled(Slider)`
  overflow: unset;
  position: relative;

  .slick-list > .slick-track {
    margin-left: 0 !important;
  }

  .slick-track {
    margin-right: 10px;
  }
  .nextArrowRight {
    position: absolute;
    bottom: 390px;
    right: 2.7%;
    z-index: 9;
    color: #1c1d1e;
    cursor: pointer;
    opacity: 1;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      border-radius: 3px;
      color: rgb(27, 28, 29);
      background-color: #f2f2f2;
      transition: background-color 0.1s ease 0s;
    }
  }

  .prevArrowLeft {
    position: absolute;
    bottom: 390px;
    right: 6.9%;
    z-index: 9;
    color: #1c1d1e;
    cursor: pointer;
    opacity: 1;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      border-radius: 3px;
      color: rgb(27, 28, 29);
      background-color: #f2f2f2;
      transition: background-color 0.1s ease 0s;
    }
  }
`;

const RightContent = styled.section`
  width: 103%;
  position: relative;
  margin-top: ${(props) => (props.marginTop === "내가 찜한 클래스" ? "64px" : "0")};
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: #1b1c1d;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.45px;
`;
