import React from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { GrFacebook, GrApple } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const SignUp = ({ isValidEmail, isValidPw, isInput, handleInput }) => {
  const BUTTONS = [
    {
      flatform: "kakao",
      icon: <RiKakaoTalkFill />,
      desc: "카카오로 3초 만에 시작하기",
    },
    { flatform: "naver", icon: "", desc: "네이버로 시작하기" },
    {
      flatform: "facebook",
      icon: <GrFacebook />,
      desc: "페이스북으로 시작하기",
    },
    { flatform: "google", icon: <FcGoogle />, desc: "구글로 시작하기" },
    { flatform: "apple", icon: <GrApple />, desc: "애플로 시작하기" },
  ];

  return (
    <LoginPageForm>
      <div>
        <div className="loginTitle">
          <span>회원가입</span>
        </div>
        <form>
          <div className="userName">
            <p>이름</p>
            <input
              value={isInput}
              onChange={handleInput}
              placeholder="홍길동"
            />
            {!isValidEmail && <span>이름을 입력해주세요.</span>}
          </div>
          <div className="email">
            <p>이메일</p>
            <input
              value={isInput}
              onChange={handleInput}
              placeholder="example@example.com"
            />
            {!isValidPw && <span>이메일을 입력해주세요.</span>}
          </div>
          <div className="phoneNumber">
            <p>휴대전화 번호</p>
            <input
              value={isInput}
              onChange={handleInput}
              placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
            />
            {!isValidEmail && <span>휴대전화 번호를 입력해주세요.</span>}
          </div>
          <div className="password">
            <p>비밀번호(8자 이상)</p>
            <input
              value={isInput}
              onChange={handleInput}
              placeholder="********"
            />
            {!isValidPw && <span>패스워드를 입력해주세요.</span>}
          </div>
          <div className="passwordConfirm">
            <p>비밀번호 확인</p>
            <input
              value={isInput}
              onChange={handleInput}
              placeholder="********"
            />
            {!isValidPw && <span>패스워드 확인을 입력해주세요.</span>}
          </div>
          <Button>동의하고 회원가입</Button>
        </form>
        <div className="btnContainer">
          {BUTTONS.map(({ flatform, desc, icon }) => {
            return (
              <Button flatform={flatform}>
                {icon}
                {desc}
              </Button>
            );
          })}
        </div>
      </div>
    </LoginPageForm>
  );
};
export default SignUp;

const LoginPageForm = styled.div`
  width: 100%;
  padding: 0 32%;

  .loginTitle {
    padding: 20px 0;

    span {
      font-size: 30px;
      font-weight: 800;
    }
  }

  div {
    padding-top: 10px;

    input {
      width: 100%;
      height: 48px;
      background-color: #e8f0fe;
      border: none;
      border-radius: 5px;
    }
  }

  .userName,
  .email,
  .phoneNumber,
  .password,
  .passwordConfirm {
    font-size: 14px;

    span {
      padding: 10px 0;
      color: #ff5252;
    }
  }

  .forgotPw {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 12px;
      color: #a8aeb3;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  border: none;
  background-color: ${({ flatform }) => {
    if (flatform === "kakao") return "#ffe812";
    else if (flatform === "naver") return "#00c73c";
    else if (flatform === "facebook") return "#1877f2";
    else if (flatform === "google") return "#f8f8f9";
    else if (flatform === "apple") return "#000000";
    else return "#ff922b";
  }};
  color: ${({ flatform }) => {
    if (flatform === "kakao") return "#000000";
    else if (flatform === "naver") return "#ffffff";
    else if (flatform === "facebook") return "#ffffff";
    else if (flatform === "google") return "#000000";
    else if (flatform === "apple") return "#ffffff";
    else return "#ffffff";
  }};
`;
