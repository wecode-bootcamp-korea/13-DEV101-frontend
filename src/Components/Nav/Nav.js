import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [mockData, setMockData] = useState([]);
  const { pathname } = useLocation();
  const isNavActive = !(pathname === "/Login");
  const isNavBottomActive = !(pathname === "/SignUp" || pathname === "/myPage");

  console.log(pathname);
  console.log(isNavActive);

  const searchBoxFocus = () => {
    setIsFocus(!isFocus);
  };

  const submitSearchBox = (e) => {
    console.log(inputValue);
    e.preventDefault();
    history.push(`searchPage?query=${inputValue}`);
  };

  const logout = () => {
    setIsLogin(false);
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("Kakao_token");
    window.localStorage.removeItem("kakao_413e1c12ccf6ca665f31d81c93ac39b6");

    isVisibleUserBox();
  };

  const userToken = localStorage.getItem("kakao_413e1c12ccf6ca665f31d81c93ac39b6");
  const kakaoToken = localStorage.getItem("Kakao_token");

  const Token = localStorage.getItem("Token");
  console.log(localStorage);

  const isVisibleUserBox = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    fetch("http://localhost:3000/Data/myPageMockData.json")
      .then((res) => res.json())
      .then((res) => {
        setMockData(res.myPageMock.my_info);
      });
  }, []);

  return (
    <NavBar isNavActive={isNavActive}>
      <NavContainer>
        {isClick && (
          <UserBox>
            <div>
              <img className="userIcon" src={mockData.profile_image} alt="profile" />
              <div>
                <span>{mockData.user_name}</span>
                <Link to="/myPage" className="link">
                  <span>마이페이지</span>
                </Link>
              </div>
            </div>
            <Link to="/Login">
              <div onClick={logout}>로그아웃</div>
            </Link>
          </UserBox>
        )}
        <MainHeader>
          <div>
            <Link to="/">
              <img className="logo" src="../Images/dev101.png" alt="logo" />
            </Link>
            <form onSubmit={submitSearchBox}>
              <div>
                <input
                  className="searchInputBox"
                  placeholder="배우고 싶은 것이 있나요?"
                  onClick={searchBoxFocus}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <BsSearch className="searchIcon" />
              </div>
            </form>
          </div>
          {Token || kakaoToken || userToken ? (
            <div className="navAfterLogin">
              <div>
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
                <div className="goToMyPage" onClick={isVisibleUserBox}>
                  <img className="userIcon" src={mockData.profile_image} alt="profile" />
                  <IoIosArrowDown className="arrowIcon" />
                </div>
              </div>
            </div>
          ) : (
            <div className="navBeforeLogin">
              <div>
                <Link to="/">
                  <span>크리에이터 지원</span>
                </Link>
                <Link
                  to="/Login"
                  onClick={() => {
                    setIsLogin(!isLogin);
                  }}
                >
                  <span>로그인</span>
                </Link>
              </div>
            </div>
          )}
        </MainHeader>
        <NavBottom isNavBottomActive={isNavBottomActive}>
          <FiMenu />
          <Link to="/">
            <span>전체</span>
          </Link>
          <Link to="/">
            <span>크리에이티브</span>
          </Link>
          <Link to="/">
            <span>머니</span>
          </Link>
          <Link to="/">
            <span>커리어</span>
          </Link>
          <Link to="/">
            <span>키즈</span>
          </Link>
          <Link to="/">
            <span>시그니처</span>
          </Link>
          <Link to="/">
            <span>리브레</span>
          </Link>
          <Link to="/">
            <span>스토어</span>
          </Link>
        </NavBottom>
      </NavContainer>
    </NavBar>
  );
};
export default Nav;

const NavBar = styled.div`
  display: ${({ isNavActive }) => (isNavActive ? "block" : "none")};
`;

const NavContainer = styled.div`
  width: 1176px;
  margin: 0 auto;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 15px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      position: relative;

      .searchIcon {
        position: absolute;
        right: 18px;
        width: 12px;
        height: 12px;
      }
    }
  }

  .logo {
    width: 110px;
    margin-left: -10px;
  }

  .searchInputBox {
    width: 380px;
    padding: 1px 44px 1px 16px;
    height: 40px;
    &:focus {
      background: #f8f8f9;
    }
  }

  .navigationContainer,
  .navBeforeLogin,
  .navAfterLogin {
    span {
      margin-left: 15px;
      font-size: 14px;
    }
  }

  div {
    .userIcon {
      margin-left: 14px;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: orange;
    }
    .arrowIcon {
      width: 12px;
      margin-left: 5px;
    }
  }
`;

const NavBottom = styled.div`
  margin-top: 15px;
  width: 70%;
  display: ${({ isNavBottomActive }) => (isNavBottomActive ? "flex" : "none")};
  justify-content: space-between;

  span {
    padding-bottom: 10px;
    font-size: 16px;
    color: #1b1c1d;
    display: flex;
    align-items: center;
    &:hover {
      color: black;
      font-weight: 700;
      border-bottom: 3px black solid;
      cursor: pointer;
    }
  }
`;

const UserBox = styled.div`
  width: 200px;
  height: 150px;
  position: absolute;
  top: 60px;
  right: 170px;
  z-index: 999;
  background-color: #fff;
  box-shadow: 5px 5px 5px #efefef;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  font-size: 17px;
  &:hover {
    cursor: pointer;
  }

  div {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 15px;
    &:hover {
      cursor: pointer;
    }

    .userIcon {
      margin-left: 14px;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: orange;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: left;

      span {
        font-size: 14px;
        padding-bottom: 8px;
      }
      .link {
        span {
          font-size: 12px;
          color: orange;
        }
      }
    }

    span {
      margin-left: 20px;
      font-size: 14px;
    }
  }
`;
