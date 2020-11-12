import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";

const Slick = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const { brand, category, subCategory, level, creatorName } = useSelector(
    (state) => state.CreatorsReducer.infomation,
  );
  const { cover, thumbnail, classTitle } = useSelector(
    (state) => state.CreatorsReducer.titleAndCover,
  );
  const infoImages = useSelector((state) => state.CreatorsReducer.infoImages);

  useEffect(() => {}, [infoImages]);

  const SlickCurrentSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="Card FirstCard">
            <div className="contents">
              <div className="tags">
                <div className="tag">by.</div>
                <div className="tag">{category}</div>
                <div className="tag">
                  {subCategory ? subCategory : "세부 카테고리를 입력해주세요"}
                </div>
                <div className="tag">{level}</div>
              </div>
              <h3>{classTitle}</h3>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="Card SecondCard">
            <div className="contents">
              <div className="tags">
                <div className="tag">{infoImages[0].discription}</div>
                <div className="tag">프로 크리에이트 사용법</div>
                <div className="tag">인물 드로잉</div>
                <div className="tag">초급자</div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="Card ThridCard">
            <div className="contents">
              <div className="tags">
                <div className="tag">{infoImages[1].discription}</div>
                <div className="tag">클래스 설명을 입력 해주세요</div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="Card ForthCard">
            <div className="creatorName">
              안녕하세요 {creatorName ? creatorName : "크리에이터"} 입니다.
            </div>
          </div>
        );
      default:
        return;
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentSection < 4) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  return (
    <Wrap cover={cover} currentSection={currentSection} infoImages={infoImages}>
      <div>
        <div className="previewSection">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div onClick={handlePrev} className="leftBtn">
          <span>
            <AiOutlineLeft />
          </span>
        </div>
        <div onClick={handleNext} className="rightBtn">
          <span>
            <AiOutlineRight />
          </span>
        </div>
        <SlickCurrentSection />
      </div>
    </Wrap>
  );
};

export default Slick;

const Wrap = Styled.div`
    position: relative;
    margin-top: 32px;
    margin-right: 32px;
    display: flex;
    width: 360px;
    > div {
      position: fixed;
    }
    .previewSection {
      display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    left: 24px;
    right: 24px;
    top: 12px;
    position: absolute;
    z-index: 10;
      span {
        height: 2px;
    margin-right: 2px;
    background-color: rgb(255, 255, 255);
    opacity: 0.3;
    flex: 1 1 0%;
      }
    span:nth-of-type(${(props) => props.currentSection}) {
      opacity: 1;
      }
    }
    .leftBtn, .rightBtn {
      display: flex;
      position: absolute;
      align-items: center;
      font-size: 30px;
      z-index: 10;
      width: 30%;
      cursor: pointer;
      color: white;
      border-radius: 12px;
      top:0;
      bottom:0;
      span {
      transform: translateY(-70%);
      }
    }
    .leftBtn {
      left: 0;
      &:hover {
        opacity: 1;
    background: linear-gradient(270deg, 
    rgba(27, 28, 29, 0) 0%,
     rgba(27, 28, 29, 0.055) 14.06%, 
     rgba(27, 28, 29, 0.16) 31.25%, 
     rgba(27, 28, 29, 0.72) 100%);
      }
    }
    .rightBtn {
      right:0;
      display: flex;
      justify-content: flex-end;
     &:hover {
      opacity: 1;
    background: linear-gradient(90deg, 
    rgba(27, 28, 29, 0) 0%, 
    rgba(27, 28, 29, 0.055) 14.06%, 
    rgba(27, 28, 29, 0.16) 31.25%, 
    rgba(27, 28, 29, 0.72) 100%);
     }

    }
    .Card {
    position: sticky;
    display: flex;
    flex-direction: column;
    top: 108px;
    width: 360px;
    height: 560px;
    background: #324042;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px, rgba(0, 0, 0, 0.03) 0px 3px 6px, rgba(0, 0, 0, 0.05) 0px 8px 12px, rgba(0, 0, 0, 0.06) 0px 12px 18px;
    border-radius: 12px;
    .contents {
      position: absolute;
      bottom: 10px;
      margin-bottom: 25px;
      width: 100%;

    h3 {
      color: white;
      font-size: 26px;
      font-weight: 600;
      padding: 10px 0;
      text-align: center;
    }
    .tags {
      ${({ theme }) => theme.flexCenterXY}
      .tag {
        padding: 8px;
        font-size: 11px;
        font-weight: bold;
        border-radius: 2px;
        background: black;
        color: white;
        margin-right: 4px;
      }
    }
    }
    .creatorName {
      position: absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
     ${({ theme }) => theme.flexCenterXY}
      font-size: 22px;
      color: white;
    }
    }
    .FirstCard {
      background-image: url(${({ cover }) => cover});
    }
    .SecondCard {
      background-image: url(${({ infoImages }) => infoImages[0].src});
    }
    .ThridCard {
      background-image: url(${({ infoImages }) => infoImages[1].src});
    }
    .ForthCard {
      background-image: url(${({ infoImages }) => infoImages[2].src});
    }
`;
