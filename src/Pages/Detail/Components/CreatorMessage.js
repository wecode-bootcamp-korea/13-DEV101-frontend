import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import axios from "axios";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { API } from "./Utils";

SwiperCore.use([Pagination]);

const CreatorMessage = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    axios.get(API).then((res) => {
      setNotice(res.data.notice);
    });
  }, []);
  return (
    <CreatorWrap>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {notice.map(({ profile_image, nickname, date, description }) => (
          <SwiperSlide>
            <MessageItem img={profile_image} nickname={nickname} date={date}>
              {description}
            </MessageItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </CreatorWrap>
  );
};

const MessageItem = ({ img, nickname, date, children }) => {
  return (
    <Wrap>
      <div>
        <img
          src={
            img
              ? img
              : "https://ssl.pstatic.net/static/pwe/address/img_profile.png"
          }
          alt=""
        />
        <div>
          <h4>{nickname}</h4>
          <p>{date}</p>
        </div>
      </div>
      <span>{children}</span>
    </Wrap>
  );
};

export default CreatorMessage;

const CreatorWrap = Styled.div`
position: relative;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 10px;
      overflow-x: hidden;
      box-shadow: rgba(41, 42, 43, 0.1) 0px 2px 5px, rgba(41, 42, 43, 0.06) 0px 0px 0.5px;
    .buttons {
      position: absolute;
      z-index: 10;
      bottom: 0;
      right: 0;
    }
`;

const Wrap = Styled.div`
    height: 184px;
    padding: 16px;
    border-radius: ${({ theme }) => theme.radius.small};
    margin: 3px 4px 0px;
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }
      > div {
        display: flex;
        padding-left: 10px;
        flex-direction: column;
        justify-content: center;
        h4 {
          font-size: 11px;
          font-weight: 600;
        }
        p {
          font-size: 10px;
          color: gray;
          padding: 3px 0;
        }
      }
    }
    span {
      font-size: 14px;
      line-height: 18px;
    }
`;
