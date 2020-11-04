import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { RiCoupon2Line } from "react-icons/ri";
import { AiOutlineHeart, AiFillInfoCircle } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "./myPage.scss";

const MyPage = () => {
  return (
    <section className="MyPage">
      <Wrapper>
        <section className="leftContainer">
          <section className="profileCard">
            <div className="profileTop">
              <div className="profileImg"></div>
              <p className="profileName">김보라s</p>
              <p className="email">kbreeze@gmail.com</p>
              <div className="myPoint">
                0 <span>P</span>
                <img src="/Images/pointIcon.png" alt="ponint" />
              </div>
            </div>
            <div className="profileBottom">
              <div className="bottomItem">
                <RiCoupon2Line size={22} />
                <p>
                  쿠폰 <span>12</span>개
                </p>
              </div>
              <div className="bottomItem">
                <AiOutlineHeart size={22} />
                <p>
                  찜 <span>36</span>개
                </p>
              </div>
              <div className="bottomItem">
                <HiOutlineShoppingBag size={22} />
                <p>
                  내 클래스 <span>0</span>개
                </p>
              </div>
            </div>
          </section>
          <section className="attendanceCard">
            <div className="attendanceTitle">
              <h2>7일간 연속 수강해서 총 10,000P 모아요</h2>
              <AiFillInfoCircle size={14} className="attendanceIcon" />
            </div>
            <p className="attendanceDesc">
              오늘 수강하면 <span>500P</span> 적립! 7일 연속 수강 챌린지를 시작하세요
            </p>
            <div className="attendancePoint">
              <div className="pointItem">
                <div className="pointCircle"></div>
                <p>500P</p>
              </div>
              <div className="pointItem">
                <div className="pointCircle"></div>
                <p>1000P</p>
              </div>
              <div className="pointItem">
                <div className="pointCircle"></div>
                <p>1500P</p>
              </div>
              <div className="pointItem">
                <div className="pointCircle"></div>
                <p>2000P</p>
              </div>
              <div className="pointItem">
                <div className="pointCircle"></div>
                <p>2500P</p>
              </div>
              <div className="pointItem">
                <div className="pointCircle"></div>
                <p>3000P</p>
              </div>
              <div className="pointItem">
                <div className="pointCircle"></div>
                <p>3500P</p>
              </div>
            </div>
          </section>
          <section className="membershipCard">
            <div className="cardTitle">멤버십</div>
            <div className="cardMenu">
              <div className="cardMenuItem">
                <p>Libre</p>
                <IoIosArrowForward size={18} opacity={0.2} />
              </div>
              <div className="cardMenuItem">
                <p>Signature+</p>
                <IoIosArrowForward size={18} opacity={0.2} />
              </div>
              <div className="cardMenuItem">
                <p>Money+</p>
                <IoIosArrowForward size={18} opacity={0.2} />
              </div>
              <div className="cardMenuItem">
                <p>Kids</p>
                <IoIosArrowForward size={18} opacity={0.2} />
              </div>
            </div>
          </section>
          <section className="menuCard">
            <div className="cardTitle">메뉴</div>
            <div className="cardMenu">
              <div className="cardMenuItem2">
                <p>
                  친구 초대하고 <span>30,000원 쿠폰</span> 받기
                </p>
                <IoIosArrowForward size={18} opacity={0.2} />
              </div>
              <div className="cardMenuItem2">
                <p>클래스101 앱 설치하기</p>
                <IoIosArrowForward size={18} opacity={0.2} />
              </div>
              <div className="cardMenuItem2">
                <p>크리에이터 센터 가기</p>
                <IoIosArrowForward size={18} opacity={0.2} />
              </div>
            </div>
          </section>
        </section>
        <section className="rightContainer">
          <RightContent>
            <Title>
              <h2>내가 본 클래스</h2>
              <div className="arrows">
                <div className="arrowContainer">
                  <IoIosArrowBack size={24} />
                </div>
                <div className="arrowContainer">
                  <IoIosArrowForward size={24} />
                </div>
              </div>
            </Title>
            <ContentWrapper>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ContentWrapper>
          </RightContent>
          <RightContentBottom>
            <Title>
              <h2>내가 찜한 클래스</h2>
              <div className="arrows">
                <div className="arrowContainer">
                  <IoIosArrowBack size={24} />
                </div>
                <div className="arrowContainer">
                  <IoIosArrowForward size={24} />
                </div>
              </div>
            </Title>
            <ContentWrapper>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ContentWrapper>
          </RightContentBottom>
          <RightContentBottom2>
            <Title>
              <h2>내가 개설한 클래스</h2>
            </Title>
            <div>
              <div></div>
            </div>
          </RightContentBottom2>
        </section>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  border: 2px solid cornflowerblue;
  max-width: 1176px;
  display: flex;
  justify-content: flex-start;
  margin: 0 80.5px;
  padding: 32px 0 24px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  border: 1px solid blue;
  width: 776px;
  display: inline-flex;
  justify-content: flex-start;
  overflow: hidden;
`;

const Card = styled.div`
  flex-shrink: 0;
  border: 1px solid black;
  width: 242.6px;
  height: 359px;
  margin-right: 26px !important;
`;

const RightContent = styled.section`
  width: 776px;

  div {
    div {
      margin-right: 5px;
      display: flex;

      div {
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          border-radius: 3px;
          color: rgb(27, 28, 29);
          background-color: #f2f2f2;
          transition: background-color 0.1s ease 0s;
        }
      }
    }
  }
`;

const RightContentBottom = styled(RightContent)`
  margin-top: 64px;
`;

const RightContentBottom2 = styled(RightContentBottom)`
  div {
    h2 {
      line-height: 24px;
    }
  }
  div {
    div {
      margin: 0 auto;
      width: 100%;
      height: 226.5px;
      padding: 24px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 1px, rgba(0, 0, 0, 0.03) 0px 2px 5px,
        rgba(0, 0, 0, 0.04) 0px 3px 7px, rgba(0, 0, 0, 0.04) 0px 7px 10px;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: $titleBlackColor;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.45px;
`;

const LikeClass = styled.section`
  width: 100%;
  border: 1px solid orange;
  margin-top: 64px;
`;

export default MyPage;
