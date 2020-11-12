import React from "react";
import Styled from "styled-components";
import SwiperCore, { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProfileImages } from "./Utils";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

const CreatorMessage = () => {
  const { notice } = useSelector((state) => state.DetailReducer);

  return (
    <CreatorWrap>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {notice.map(({ profile_image, nickname, date, description }, i) => (
          <SwiperSlide key={i}>
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
        <ProfileImages img={img} />
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
