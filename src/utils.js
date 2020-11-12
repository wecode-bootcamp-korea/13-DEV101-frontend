import React from "react";
import styled from "styled-components";

// export const API = "http://localhost:3000/Data/Detail.json";
export const API = "http://10.58.1.45:8000/product/";
export const ORDER_API = "http://10.58.1.45:8000/order/";

export const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

export const Hr = ({ margin }) => {
  return (
    <HrWrap margin={margin}>
      <hr />
    </HrWrap>
  );
};

const HrWrap = styled.div`
  hr {
    height: 1px;
    border: none;
    margin: ${({ margin }) => margin || "16px 0"};
    box-shadow: rgb(237, 239, 240) 0px -1px 0px inset;
    height: 1px;
  }
`;
