import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="Nav">
      <NavContainer>
        <MainHeader>
          <img className="logo" src="../Images/dev101.png" alt="logo" />
          <div>
            <input className="searchInputBox" placeholder="배우고 싶은 것이 있나요?" />
            <BsSearch />
          </div>
          <div className="navigationContainer">
            <Link to="/">
              <span>크리에이터 지원</span>
            </Link>
            <Link to="/">
              <span>주문 및 배송</span>
            </Link>
            <Link to="/">
              <span>내 쿠폰</span>
            </Link>
            <Link to="/">
              <span>내 클래스</span>
            </Link>
          </div>
          <div>
            <div className="userIcon"></div>
          </div>
        </MainHeader>
      </NavContainer>
    </div>
  );
};

export default Nav;

const NavContainer = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  border: 1px solid red;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 15%;

  .logo {
    width: 100px;
    height: 50px;
  }

  .searchInputBox {
    width: 300px;
    height: 40px;
  }

  .navigationContainer {
    span {
      margin-left: 15px;
      font-size: 14px;
    }
  }

  .userIcon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: orange;
  }
`;
