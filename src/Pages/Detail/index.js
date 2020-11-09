import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AiFillExclamationCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Aside from "./Aside";
import Banner from "./Components/Banner";
import Review from "./Components/Review";
import LearningGoal from "./Components/LearningGoal";
import WhatIsClass from "./Components/WhatIsClass";
import Community from "./Components/Community";
import HeadModal from "./Components/HeadModal";
import { Hr } from "./Components/Utils";
import TopHeader from "./TopHeader";
import {
  getClassInfo,
  getHeaderImages,
  getClassReviews,
  getClassCommunity,
  getNotice,
  getDetailAside,
  getProductId,
} from "../../store/DetailReducer";
import { API } from "./Components/Utils";

const SLICK_WIDTH = 850;

const Detail = () => {
  const [isTopModal, setIsTopModal] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const [selectTab, setSelectTab] = useState(0);
  const [slickWidth, setSlickWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { id: classId } = useParams();

  const { detail, headerImages } = useSelector((store) => store.DetailReducer);
  const dispatch = useDispatch();
  const focusTarget = useRef([]);
  const scrollEvent = () => {
    setScrollValue(document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    axios.get(`${API}${classId}`).then((res) => {
      dispatch(getClassInfo(res.data.detail));
      dispatch(getHeaderImages(res.data.header_images));
      dispatch(getClassReviews(res.data.reviews));
      dispatch(getClassCommunity(res.data.community));
      dispatch(getNotice(res.data.notice));
      dispatch(getProductId(classId));
      dispatch(getDetailAside(res.data.detail_aside));
    });
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  useEffect(() => {
    const isFirstTabActive = scrollValue < focusTarget.current[1].offsetTop - 50;
    setSelectTab(isFirstTabActive ? 1 : 2);
  }, [scrollValue]);

  const MoveEvent = (value) => {
    window.scrollTo({
      top: value - 30,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSlick = (waypoint) => {
    if (waypoint === "right") {
      if (slickWidth > (headerImages.length - 1) * -SLICK_WIDTH) {
        setSlickWidth((prev) => prev - SLICK_WIDTH);
        setCurrentPage((prev) => prev + 1);
      } else if ((headerImages.length - 1) * -SLICK_WIDTH) {
        setSlickWidth(0);
        setCurrentPage(1);
      }
    }
    if (waypoint === "left") {
      if (0 > slickWidth) {
        setSlickWidth((prev) => prev + SLICK_WIDTH);
        setCurrentPage((prev) => prev - 1);
      } else if (0 === slickWidth) {
        setSlickWidth((headerImages.length - 1) * -SLICK_WIDTH);
        setCurrentPage(headerImages.length);
      }
    }
  };

  const handleModal = (number) => {
    setIsTopModal((prev) => !prev);
    setSlickWidth((number - 1) * -SLICK_WIDTH);
    setCurrentPage(number);
  };

  return (
    <>
      <TopHeader handleModal={handleModal} />
      <Contents selectTab={selectTab}>
        <div className="main">
          <div className="stickyTab">
            <ul>
              <li onClick={() => MoveEvent(focusTarget.current[0]?.offsetTop)}>클래스 소개</li>
              <li onClick={() => MoveEvent(focusTarget.current[1]?.offsetTop)}>커뮤니티</li>
            </ul>
          </div>
          <div>
            <div>
              <Banner bgcolor="#1b1b1b" color="#fff" radius="1px">
                <div>
                  <span>단 7일 최대 38만원 할인!</span>
                  <p>크리에이터 가입자 5만 돌파 기념</p>
                </div>
                <div>
                  <img
                    src="https://cdn.class101.net/images/735748c0-9f44-40d7-a399-06f5204d92c6/autoxauto.png"
                    alt="logo"
                  />
                </div>
              </Banner>
              <Banner bgcolor="#f8f8f9" color="#000" radius="4px">
                <div>
                  <span style={{ fontSize: "14px" }}>
                    {" "}
                    <AiFillExclamationCircle /> 크리에이터와 함께 준비한 역대급 할인 주간!
                  </span>
                  <p>인기 클래스 선착순 최대 할인</p>
                </div>
              </Banner>
              <div className="images">
                <img
                  src="https://cdn.class101.net/images/fa3e9d10-7fcb-431a-aa38-e0cbf9eebfee/1440xauto.webp"
                  alt="logo"
                />
              </div>
              <div className="classInfo" ref={(el) => (focusTarget.current[0] = el)}>
                <h4>클래스 정보</h4>
                <ul>
                  <li>
                    <h5>클래스 분량</h5>
                    <span>
                      {detail.class_info?.chapter}개 챕터,
                      {detail.class_info?.sub_chapter}개 세부강의
                    </span>
                  </li>
                  <li>
                    <h5>수강 가능일</h5>
                    <span>바로 수강 가능</span>
                  </li>
                  <li>
                    <h5>자막 포함 여부</h5>
                    <span>{detail.class_info?.is_subtitled ? "포함" : "미포함"}</span>
                  </li>
                </ul>
              </div>
              <Hr margin="32px 0" />
              <Review />
              <LearningGoal />
              <WhatIsClass />
            </div>
            <Community focusTarget={focusTarget} />
          </div>
        </div>
        <Aside classId={classId} />
        {isTopModal && (
          <HeadModal
            handleModal={handleModal}
            handleSlick={handleSlick}
            slickWidth={slickWidth}
            currentPage={currentPage}
          />
        )}
      </Contents>
    </>
  );
};

const Contents = styled.div`
  display: flex;
  padding: 24px 0;
  max-width: 1176px;
  margin: 0 auto;
  .main {
    width: 69%;
    padding: 0 12px;
    .stickyTab {
      position: sticky;
      z-index: 10;
      transform: translateY(-1px);
      top: 0;
      background: white;
      ul {
        display: flex;
        margin: 0 10px;
        font-size: 14px;
        li:nth-of-type(${({ selectTab }) => selectTab}) {
          position: relative;
          font-weight: bold;
          padding: 14px 0px 13px;
          &:before {
            position: absolute;
            bottom: -0px;
            left: 50%;
            content: "";
            width: 100%;
            height: 3px;
            background-color: #1b1c1d;
            transform: translateX(-50%);
          }
        }
        li {
          cursor: pointer;
          color: #000;
          padding: 14px 0;
          margin-right: 24px;
        }
      }
    }
    .images {
      img {
        width: 100%;
      }
    }
    .classInfo {
      h4 {
        padding: 25px 0;
        font-weight: bold;
      }
      ul {
        display: flex;
        li {
          display: flex;
          h5 {
            font-size: 14px;
            color: gray;
            padding-right: 10px;
          }
          span {
            font-size: 14px;
            margin-right: 50px;
          }
        }
      }
    }
  }
  @media ${({ theme }) => theme.tabletS} {
    display: flex;
    flex-direction: column;
    .main {
      width: 100%;
      .classInfo {
        margin: 30px 0;
        ${({ theme }) => theme.flexCenterXY}
      }
    }
  }
`;

export default Detail;
