import React from "react";
import styled from "styled-components";

const Banner = ({ children, ...stylesProps }) => {
  return <BannerWrap {...stylesProps}>{children}</BannerWrap>;
};

const BannerWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background: ${({ bgcolor }) => bgcolor || "black"};
  color: ${({ color }) => color || "white"};
  margin-bottom: 20px;
  border-radius: ${({ radius }) => radius || 0};
  div {
    padding: 24px;
    display: flex;
    flex-direction: column;
  }
  span {
    font-weight: 600;
  }
  p {
    padding-top: 10px;
    font-size: 10px;
    font-weight: 400;
  }
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
  }
`;

export default Banner;
