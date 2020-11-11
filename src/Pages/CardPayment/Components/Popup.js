import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { AiFillCheckCircle, AiFillWarning } from "react-icons/ai";

const Popup = ({ type }) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const hiddenTimeout = setTimeout(() => {
      setIsHidden(false);
    }, 2000);
    return () => {
      clearTimeout(hiddenTimeout);
    };
  });

  const handleHidden = () => {
    setIsHidden((prev) => !prev);
  };
  return (
    <Wrap type={type} isHidden={isHidden}>
      <div onClick={handleHidden}>
        {type === "success" && (
          <>
            <AiFillCheckCircle />
            <span>결제가 완료되었습니다!</span>
          </>
        )}
        {type === "failed" && (
          <>
            <AiFillWarning />
            <span>결제에 실패하였습니다!</span>
          </>
        )}
      </div>
    </Wrap>
  );
};

export default Popup;

const Wrap = Styled.div`
position: fixed;
cursor: pointer;
display: flex;
  top: 40px;
  div {
    ${({ theme }) => theme.flexCenterY}
  transition: visibility 2s linear 0s, opacity 200ms;
  visibility: ${({ isHidden }) => (isHidden ? "visible" : "hidden")};
  opacity: ${({ isHidden }) => (isHidden ? 1 : 0)};
    color: white;
    width: 270px;
  border-radius: 2px;
    padding: 14px 20px;
      font-size: 20px;
    background: ${({ type }) =>
      type === "success" ? "#00b79d" : type === "failed" && "#d93025"};
    span {
      padding-left: 5px;
      font-size: 14px;
    }
  }

`;
