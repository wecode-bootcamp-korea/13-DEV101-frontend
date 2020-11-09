import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const LearningGoal = () => {
  const to_learn = useSelector(
    (state) => state.DetailReducer.detail.class_info?.to_learn,
  );

  return (
    <LearningGoalWrap>
      <h2>이런 걸 배울 거에요</h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={2.5}
        scrollbar={{ draggable: true }}
      >
        {to_learn?.map(({ title, description, image_url }) => (
          <SwiperSlide>
            <span>
              <p>{description}</p>
              <img src={image_url} alt="Learnning" />
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </LearningGoalWrap>
  );
};

export default LearningGoal;

const LearningGoalWrap = styled.div`
  margin-bottom: 50px;

  h2 {
    font-size: 25px;
    font-weight: 600;
    padding: 20px 0;
  }

  div {
    width: 100%;
    overflow-x: hidden;
    user-select: none;
    cursor: pointer;

    div {
      width: max-content;
      display: flex;
      flex-flow: nowrap;
      /* flex-wrap: nowrap; */

      span {
        width: 304px;
        margin: 18px;

        p {
          color: gray;
          font-size: 14px;
          line-height: 20px;
          padding: 8px 0 12px;
        }

        img {
          width: 304px;
          height: 200px;
        }
      }
    }
  }
`;
