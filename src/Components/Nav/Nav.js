import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import { JHAPI } from "../../config";

const Nav = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const isNavActive = !(
    pathname === "/Login" ||
    pathname.includes("payment") ||
    pathname.includes("creators")
  );
  const isNavBottomActive = !(pathname === "/SignUp" || pathname === "/myPage");

  const searchBoxFocus = () => {
    setIsFocus(!isFocus);
  };

  const submitSearchBox = (e) => {
    e.preventDefault();
    history.push(`searchPage?query=${inputValue}`);
  };

  const logout = () => {
    setIsLogin(false);
    window.localStorage.removeItem("TOKEN");

    isVisibleUserBox();
  };

  const Token = localStorage.getItem("TOKEN");

  const isVisibleUserBox = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      fetch(`${JHAPI}/user/me`, {
        headers: {
          Authorization: localStorage.getItem("TOKEN"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          const myInfo = res.mypage[0].my_info;
          setUserInfo({
            user_name: myInfo.user_name,
            user_profile: myInfo.profile_image,
          });
        });
    }
  }, []);

  return (
    <NavBar className="nav" isNavActive={isNavActive} onClick={(e) => isVisibleUserBox(e)}>
      <NavContainer>
        {isClick && (
          <UserBox>
            <div>
              <img
                className="userIcon"
                src={
                  userInfo.user_profile
                    ? userInfo.user_profile
                    : "https://www.pngfind.com/pngs/m/378-3780189_member-icon-png-transparent-png.png"
                }
                alt="profile"
              />
              <div>
                <span>{userInfo.user_name}</span>
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
          {Token ? (
            <div className="navAfterLogin">
              <div>
                <Link to="/creators">
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
                  <img
                    className="userIcon"
                    src={
                      userInfo.user_profile
                        ? userInfo.user_profile
                        : "https://www.pngfind.com/pngs/m/378-3780189_member-icon-png-transparent-png.png"
                    }
                    alt="profile"
                  />
                  <IoIosArrowDown className="arrowIcon" />
                </div>
              </div>
            </div>
          ) : (
            <div className="navBeforeLogin">
              <div>
                <Link to="/creators">
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
          <Link to="/">
            <FiMenu />
          </Link>
          <Link to="/">
            <span>전체</span>
          </Link>
          <Link to="/category/크리에이티브">
            <span>크리에이티브</span>
          </Link>
          <Link to="/">
            <span>머니</span>
          </Link>
          <Link to="/category/커리어">
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 555;
  width: 100%;
  background-color: #fff;
`;

const NavContainer = styled.div`
  width: 1176px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 15px;

  input {
    border: none;
    outline: none;
    box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.05);
  }

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
    margin: 0 15px 0 -10px;
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
      width: 25px;
      height: 25px;
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
  width: 100%;
  display: ${({ isNavBottomActive }) => (isNavBottomActive ? "flex" : "none")};
  justify-content: space-between;
  background-color: #fff;
  a {
    padding: 15px;
    &:nth-child(1) {
      &:hover {
        border: none;
      }
    }
    &:hover {
      border-bottom: 3px solid #000;
      color: black;
      font-weight: 700;
      cursor: pointer;
    }
  }
  span {
    padding-bottom: 10px;
    font-size: 16px;
    color: #1b1c1d;
    display: flex;
    align-items: center;
    &:hover {
      color: black;
      font-weight: 700;
      /* border-bottom: 3px black solid; */
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
