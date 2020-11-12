import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { GrFacebook, GrApple } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { JHAPI } from "../../config";

const LoginAnother = ({ isInputEmail, isInputPw, inputEmailId, inputEmailPw }) => {
  const BUTTONS = [
    {
      flatform: "kakao",
      icon: <RiKakaoTalkFill />,
      desc: "카카오로 5초 만에 시작하기",
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

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (values) => {
    const loginAPI = `${JHAPI}/user/signin`;

    fetch(loginAPI, {
      method: "post",
      body: JSON.stringify({
        email: isInputEmail,
        password: isInputPw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // if (res.success) {
        //   alert("저장 완료");
        // }
        console.log(res);
        if (res.message === "SUCCESS") {
          localStorage.setItem("TOKEN", res.TOKEN);
          history.push("/");
        }
        if (res.message === "INVALID_USER") {
          alert("가입되지 않은 회원입니다.");
        }
        if (res.message === "PASSWORD_ERROR") {
          alert("비밀번호를 확인해주세요.");
        }
      });
  };

  return (
    <LoginPageForm>
      <div>
        <div className="loginTitle">
          <span>로그인</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="email">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              value={isInputEmail}
              onChange={inputEmailId}
              placeholder="example@naver.com"
            />
          </div>
          <div className="password">
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              value={isInputPw}
              onChange={inputEmailPw}
              placeholder="********"
            />
          </div>
          <div className="forgotPw">
            <span>비밀번호를 잊으셨나요?</span>
            <Link to="/SignUp">
              <span>회원 가입하기</span>
            </Link>
          </div>
          <Button type="submit">로그인</Button>
        </form>
        <div className="btnContainer">
          {BUTTONS.map(({ flatform, desc, icon }, i) => {
            return (
              <Button key={i} flatform={flatform}>
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
export default LoginAnother;

const LoginPageForm = styled.div`
  width: 100%;
  padding: 0 15%;

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

  .email,
  .password {
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
