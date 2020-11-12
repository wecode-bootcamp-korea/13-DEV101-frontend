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

const slickSettings = {
  infinite: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  draggable: true,
  dots: false,
};

const ClassMadeCard = ({ dataList }) => {
  console.log("dataListM{", dataList);
  return (
    <StyledSlider
      {...slickSettings}
      nextArrow={<Arrow type="next" />}
      prevArrow={<Arrow type="prev" />}
    >
      {dataList?.map((classList) => {
        return (
          <ClassCard>
            <div className="imgWrapper">
              <img src={classList.class_image} alt="class" />
            </div>
            <div>
              <div>
                <h2>{classList.title}</h2>
                <p>
                  {classList.category} · {classList.mentor}
                </p>
                <p>
                  내 클래스를 한마디로 표현한다면 어떤 단어가 좋을까요? 클래스에 대한 소개글을
                  작성해 간단하지만 효과적으로 클래스를 어필해보세요.
                </p>
              </div>
              <button>클래스로 이동하기</button>
            </div>
          </ClassCard>
        );
      })}
    </StyledSlider>
  );
};

export default ClassMadeCard;

const StyledSlider = styled(Slider)`
  width: 776px;
  height: 226.5px;
  overflow: unset;
  position: relative;

  .nextArrowRight {
    position: absolute;
    bottom: 246px;
    right: -0.1%;
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
    bottom: 246px;
    right: 4.2%;
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

const ClassCard = styled.div`
  margin: 0 auto;
  margin-bottom: 23px;
  width: 765px !important;
  height: 226.5px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 1px, rgba(0, 0, 0, 0.03) 0px 2px 5px,
    rgba(0, 0, 0, 0.04) 0px 3px 7px, rgba(0, 0, 0, 0.04) 0px 7px 10px;
  border-radius: 8px;
  display: flex !important;
  justify-content: space-between !important;

  .imgWrapper {
    width: 250px;
    height: 180px;
    background-color: #eeeeee;
    border-radius: 1px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div:nth-child(2) {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      padding: 0 6px;
      h2 {
        font-size: 18px;
        font-weight: 500;
        color: rgb(27, 28, 29);
        line-height: 24px;
        letter-spacing: -0.45px;
        margin: 4px 0 8px;
      }

      p:nth-child(2) {
        font-size: 13px;
        color: #808080;
      }
      p:nth-child(3) {
        font-size: 14px;
        color: #a3a3a3;
        margin-top: 22px;
        line-height: 20px;
      }
    }

    button {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      color: rgb(237, 239, 240);
      background-color: rgb(62, 64, 66);
      font-weight: 500;
      font-size: 14px;
      letter-spacing: -0.2px;
      padding: 0px 16px;
      height: 40px;
      transition: background-color 0.1s ease 0s;
      text-decoration-line: none;
      cursor: pointer;
    }
  }
`;
