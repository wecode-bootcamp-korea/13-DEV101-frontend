import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {
  FaRegHeart,
  FaRegShareSquare,
  FaFireAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { JHAPI } from "../config";
import IsPlannedModalContents from "./IsPlannedModalContents";

const IsPlannedModal = ({ modalVisible, id, modalHandler }) => {
  const [productInfo, setProductInfo] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [extrainfo, setExtraInfo] = useState({});
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${JHAPI}/product/${id}`, {
        headers: {
          Authorization: localStorage.getItem("TOKEN"),
          // Authorization:
          //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTd9.6B6hmXf3Wu4LMlAU3aIc7XUiFDmaHli7V4a6YwKpPmI",
        },
      })
      .then(({ data }) => {
        setExtraInfo({ cheerCount: data.cheer_count, likeCount: data.like_count });
        setProductInfo([
          {
            innerHTML: `
        <ul className="tag">
          <li>by. 빵어니스타</li>
          <li>${data?.category}</li>
          <li>${data?.sub_category}</li>
          <li>${data?.category_detail}</li>
          <li>${data?.level}</li>
        </ul>
        <p>${data?.title}</p>
      `,
            background: data.cover_image,
          },
          {
            innerHTML: `<p>DEV101 그 동안 수고많았어요❤❤ 사..사...애정해요...❤</p>`,
            background: data?.thumbnail_image,
          },
          {
            innerHTML: `<p>DEV101 구현정, 김보라, 김지훈, 박현희, 전민승, 함준호</p>`,
            background: data?.cover_image,
          },
        ]);
      });
  }, [id]);

  const closeModalHandler = ({ target }) => {
    if (target.className.includes("close")) {
      modalHandler();
    }
  };

  const cheerBtnHandler = () => {
    axios
      .post(
        `${JHAPI}/product/${id}/cheer`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("TOKEN"),
            // Authorization:
            //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTd9.6B6hmXf3Wu4LMlAU3aIc7XUiFDmaHli7V4a6YwKpPmI",
          },
        },
      )
      .then((res) => alert("응원하기가 완료되었습니다."))
      .catch((err) => {
        if (err.message.includes("400")) {
          alert("로그인을 먼저 해주세요.");
          history.push("/Login");
        }
      });
  };

  const sliderBtnHandler = ({ target }) => {
    setActiveIndex(activeIndex + Number(target.value));
  };

  const indexBtnHandler = ({ target }) => {
    setActiveIndex(target.value);
  };

  return (
    <ModalWrapper className="close" visible={modalVisible} onClick={(e) => closeModalHandler(e)}>
      <ModalContainer background={productInfo.length > 0 && productInfo[activeIndex].background}>
        <ModalLayout>
          <Pagination>
            <button
              className={activeIndex >= 0 ? "indexBtn active" : "indexBtn"}
              onClick={(e) => indexBtnHandler(e)}
              value={0}
            />
            <button
              className={activeIndex >= 1 ? "indexBtn active" : "indexBtn"}
              onClick={(e) => indexBtnHandler(e)}
              value={1}
            />
            <button
              className={activeIndex >= 2 ? "indexBtn active" : "indexBtn"}
              onClick={(e) => indexBtnHandler(e)}
              value={2}
            />
          </Pagination>
          <Utils>
            <li>
              <button>
                <FaRegHeart />
                {extrainfo.likeCount}
              </button>
            </li>
            <li>
              <button>
                <FaRegShareSquare />
              </button>
            </li>
            <li close="close">
              <button className="close">
                <span></span>
                <span></span>
              </button>
            </li>
          </Utils>
          <SliderButton className="sliderBtn" value="-1" onClick={(e) => sliderBtnHandler(e)} prev>
            <FaChevronLeft />
          </SliderButton>
          <SliderButton className="sliderBtn" value="1" onClick={(e) => sliderBtnHandler(e)}>
            <FaChevronRight />
          </SliderButton>
          <Cheered>
            <p>
              <span className="title">현재 응원 수</span>
              <span>
                <span className="border">{extrainfo.cheerCount}명</span>/10명
              </span>
            </p>
            <button className="cheerBtn" onClick={(e) => cheerBtnHandler(e)}>
              <FaFireAlt />
              응원하고 리워드 쿠폰 받기
            </button>
          </Cheered>
        </ModalLayout>
        <IsPlannedModalContents
          contents={productInfo.length > 0 && productInfo[activeIndex]}
        ></IsPlannedModalContents>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default IsPlannedModal;

const ModalWrapper = styled.div`
  position: fixed;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  padding: 150px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  * {
    color: #fff;
  }
`;

const ModalContainer = styled.div`
  position: relative;
  width: 405px;
  height: 648px;
  padding: 10px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.background}) no-repeat 50% 50% / cover;
  z-index: 111;
`;

const ModalLayout = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  right: 20px;
  bottom: 10px;
  /* ul {
    &:nth-child(2) {
      display: flex;
      padding-top: 20px;
      li {
        &:nth-child(1) {
          svg {
            margin-right: 5px;
          }
        }
        &:nth-child(3) {
          margin-left: auto;
        }

        button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30px;
          min-width: 30px;
          padding: 5px 10px;
          margin-right: 5px;
          border-radius: 100px;
          background-color: rgba(0, 0, 0, 0.3);
          cursor: pointer;
          z-index: 333;

          span {
            display: inline-block;
            position: absolute;
            left: 50%;
            top: 50%;
            width: 15px;
            height: 2px;
            background-color: #fff;

            &:nth-child(1) {
              transform: translate(-50%, -50%) rotate(45deg);
            }
            &:nth-child(2) {
              transform: translate(-50%, -50%) rotate(-45deg);
            }
          }
        }
      }
    }
  } */
`;

const Utils = styled.ul`
  display: flex;
  padding-top: 20px;
  li {
    &:nth-child(1) {
      svg {
        margin-right: 5px;
        pointer-events: none;
      }
    }
    &:nth-child(3) {
      margin-left: auto;
    }

    button {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      min-width: 30px;
      padding: 5px 10px;
      margin-right: 5px;
      border-radius: 100px;
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
      z-index: 333;

      span {
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 15px;
        height: 2px;
        background-color: #fff;

        &:nth-child(1) {
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &:nth-child(2) {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }
  }
`;

const Pagination = styled.div`
  display: flex;

  button {
    width: 32%;
    height: 3px;
    margin-right: 2%;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 333;
    cursor: pointer;

    &.active {
      background-color: #fff;
    }

    &:nth-child(3) {
      margin-right: 0;
    }
  }
`;

const SliderButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  ${({ prev }) => (prev ? "left" : "right")}: 0;
  transform: translateY(-50%);
  font-size: 20px;
  cursor: pointer;
  z-index: 333;
  svg {
    pointer-events: none;
  }
`;

const Cheered = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  p {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 0 15px 5px 2px;
    margin-right: 15px;
    border-bottom: 2px solid #fc3d46;
    line-height: 1.5;
    font-size: 12px;
    span {
      &.border {
        font-size: 16px;
        font-weight: 600;
        padding-right: 3px;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    border-radius: 10px;
    background-color: #fc3d46;
    font-size: 14px;
    cursor: pointer;
    svg {
      margin-right: 5px;
    }
  }
`;
