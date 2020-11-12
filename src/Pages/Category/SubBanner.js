import { useState } from "react";
import styled from "styled-components";
import leftBtn from "../images/left.png";
import rightBtn from "../images/right.png";
import banner01 from "../images/subBanner01.jpg";
import banner02 from "../images/banner2.jpg";

const SubBanner = () => {
  const [trnaslateX, setTranslateX] = useState(0);
  const slideHandler = (value) => {
    if (trnaslateX + value > 0 || trnaslateX + value < -100) return;
    setTranslateX(trnaslateX + value);
  };
  return (
    <SubBannerWrapper trnaslateX={trnaslateX}>
      <ul>
        <li>
          <img src={banner01} alt="eventBanner" />
        </li>
        <li>
          <img src={banner02} alt="eventBanner" />
        </li>
      </ul>
      <div>
        <SliderBtn
          left
          disabled={trnaslateX === 0 && true}
          onClick={() => slideHandler(100)}
        ></SliderBtn>
        <SliderBtn
          disabled={trnaslateX !== 0 && true}
          onClick={() => slideHandler(-100)}
        ></SliderBtn>
      </div>
    </SubBannerWrapper>
  );
};

const SubBannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 100px;
  > ul {
    display: flex;
    overflow: hidden;
    li {
      transform: translateX(${(props) => props.trnaslateX}%);
      transition: 0.35s ease;
    }
  }
  div {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const SliderBtn = styled.button`
  &:disabled {
    opacity: 0.3;
  }
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? "left" : "right")}: -45px;
  background: url(${(props) => (props.left ? leftBtn : rightBtn)}) no-repeat 50% 50% / cover;
`;

export default SubBanner;
