import React, { useState } from "react";
import Styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const API = "http://localhost:3000/Data/Detail.json";
// export const API = "http://10.58.1.45:8000/product/1";
export const APIPOST = "http://10.58.1.45:8000/product/1/post";

export const Hr = ({ margin }) => {
  return (
    <HrWrap margin={margin}>
      <hr />
    </HrWrap>
  );
};

export const Tooltip = () => {
  const [istooltip, setIstooltip] = useState(false);

  const handleToopTip = () => {
    setIstooltip((prev) => !prev);
  };
  return (
    <Wrap onClick={handleToopTip} istooltip={istooltip}>
      <span>주소를 몰라도 간편하게!</span>
      <div>
        <AiOutlineClose />
      </div>
    </Wrap>
  );
};

const Wrap = Styled.div`  
display: flex;
visibility:${(props) => props.istooltip && "hidden"};
align-items: center;
z-index: 10px;
position: absolute;
top: -50px;
right: 0;
background: ${(props) => (props.istooltip ? "white" : "black")};
transition: all .3s;
border-radius: ${({ theme }) => theme.radius.small};
padding: 10px 12px;
cursor: pointer;
div {
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: white;
}
&::before {
  content: '';
  position: absolute;
  transform: rotate(45deg) translateY(50%);;
  background: ${(props) => (props.istooltip ? "white" : "black")};
  bottom: 0;
  z-index: 9;
  right: 10%;
  width: 10px;
  height: 10px;

}
span {
  color: white;
  font-size: 10px;
  line-height: 15px;
}
`;

const HrWrap = Styled.div`
  hr {
    height: 1px;
    border: none;
    margin: ${(props) => props.margin || "16px 0"};
    box-shadow: #edeff0 0px -1px 0px inset;
    height: 1px;
  }
`;
