import ClassCard from "./ClassCard";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

const SliderComponent = ({ dataList, showingSlidesCount, modalHandler }) => {
  return (
    <SliderWrapper>
      <Swiper slidesPerView={showingSlidesCount || 4}>
        {dataList?.map((data) => {
          return (
            <SwiperSlide key={data.product_id}>
              <ClassCard {...data} modalHandler={modalHandler} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  margin-bottom: 100px;
  ${Swiper} {
    .swiper-container {
      position: relative;
    }
  }
`;

export default SliderComponent;
