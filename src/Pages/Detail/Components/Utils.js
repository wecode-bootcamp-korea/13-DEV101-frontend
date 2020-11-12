import React, { useState } from "react";
import Styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

// export const API = "http://localhost:3000/Data/Detail.json";
export const API = "http://10.58.1.45:8000/product/";
export const APIPOST = "http://10.58.1.45:8000/product/1/post/1";

export const Hr = ({ margin }) => {
  return (
    <HrWrap margin={margin}>
      <hr />
    </HrWrap>
  );
};

export const Tooltip = () => {
  const [isTooltip, setIstooltip] = useState(false);

  const handleToopTip = () => {
    setIstooltip((prev) => !prev);
  };
  return (
    <Wrap onClick={handleToopTip} isTooltip={isTooltip}>
      <span>주소를 몰라도 간편하게!</span>
      <div>
        <AiOutlineClose />
      </div>
    </Wrap>
  );
};

export const ProfileImages = ({ img }) => {
  return (
    <ProfileImageWrap>
      <img
        src={img ? img : "https://ssl.pstatic.net/static/pwe/address/img_profile.png"}
        alt="profile"
      />
    </ProfileImageWrap>
  );
};

const Wrap = Styled.div`  
display: flex;
visibility:${({ isTooltip }) => isTooltip && "hidden"};
align-items: center;
z-index: 10px;
position: absolute;
top: -50px;
right: 0;
background: ${({ isTooltip }) => (isTooltip ? "white" : "black")};
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
  transform: rotate(45deg) translateY(50%);
  background: ${({ isTooltip }) => (isTooltip ? "white" : "black")};
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
    margin: ${({ margin }) => margin || "16px 0"};
    box-shadow: #edeff0 0px -1px 0px inset;
    height: 1px;
  }
`;

const ProfileImageWrap = Styled.div`
  img {
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
`;
