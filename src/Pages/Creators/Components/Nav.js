import React from "react";
import Styled from "styled-components";

const Nav = ({ handleExit }) => {
  return (
    <Wrap>
      <div className="navLeft">
        <img src="https://class101.net/images/101-logo.svg" alt="" />
        <span>수요조사 시작하기</span>
        <p>0% 완료</p>
      </div>
      <button onClick={handleExit} className="exit">
        나가기
      </button>
    </Wrap>
  );
};
const Wrap = Styled.div`
  display: flex;
  position: sticky;
  z-index: 20;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 76px;
  background: white;
  justify-content: space-between;
  padding: 15px 25px;
  border-bottom: 2px solid #edeff0;
  .navLeft {
    display: flex;  
    align-items: center;
    p {
      font-size: 14px;
      color: #fd7e24;
    }
    > * {
      padding: 0 6px;
    }
  }
  .exit {
    display: flex;
    background: #f8f8f9;
    padding: 0 16px;
    border-radius: 3px;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #dddde1;
    }
  }
`;
export default Nav;
