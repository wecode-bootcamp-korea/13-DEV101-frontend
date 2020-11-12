import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { GrFacebook, GrApple } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
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

  const [isInputValue, setIsInputValue] = useState({
    isInputUserName: "",
    isInputEmail: "",
    isInputPhoneNumber: "",
    isInputPassword: "",
    isInputPasswordCheck: "",
  });

  const API = "http://10.58.5.35:8000/user/signup";

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        name: isInputValue.isInputUserName,
        email: isInputValue.isInputEmail,
        phone_number: isInputValue.isInputPhoneNumber,
        password: isInputValue.isInputPassword,
        re_password: isInputValue.isInputPasswordCheck,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log("결과:", result));
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setIsInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <LoginPageForm>
      <div>
        <div className="loginTitle">
          <span>회원가입</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="userName">
            <label>이름</label>
            <input
              type="text"
              name="isInputUserName"
              onChange={handleChangeInput}
              placeholder="홍길동"
              ref={register({
                required: "이름을 입력해주세요.",
                minLength: 3,
              })}
            />
            {errors.userName?.type === "minLength" && <span> 3글자 이상 !!!</span>}
          </div>
          <div className="email">
            <label>이메일</label>
            <input
              type="email"
              name="isInputEmail"
              onChange={handleChangeInput}
              placeholder="example@example.com"
              ref={register}
            />
          </div>
          <div className="phoneNumber">
            <label>휴대전화 번호</label>
            <input
              type="number"
              name="isInputPhoneNumber"
              onChange={handleChangeInput}
              placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
              ref={register({
                required: "휴대전화을 입력해주세요.",
                minLength: 10,
              })}
            />
            {errors.phoneNumber?.type === "minLength" && <span> 숫자 11개 !!!</span>}
          </div>
          <div className="password">
            <label>비밀번호(8자 이상)</label>
            <input
              type="password"
              name="isInputPassword"
              onChange={handleChangeInput}
              placeholder="********"
              ref={register({
                minLength: 8,
              })}
            />
            {errors.password?.type === "minLength" && <span> 비밀번호 최소 8글자 !!!</span>}
          </div>
          <div className="passwordConfirm">
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="isInputPasswordCheck"
              onChange={handleChangeInput}
              placeholder="********"
              ref={register({
                required: "비밀번호를 확인해주세요.",
                minLength: 8,
              })}
            />
            {errors.passwordCheck?.type === "minLength" && <span> 비밀번호 최소 8글자 !!!</span>}
          </div>
          <div className="checkbox">
            <label>
              <input className="inputCheckbox" type="checkbox" name="checkbox" />
              이벤트 및 할인소식 알림 동의(선택)
            </label>
          </div>
          <Button type="submit">동의하고 회원가입</Button>
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
  .passwordConfirm,
  .checkbox {
    font-size: 14px;

    span {
      padding: 10px 0;
      color: #ff5252;
    }
  }

  .inputCheckbox {
    width: 15px;
    height: 15px;
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
