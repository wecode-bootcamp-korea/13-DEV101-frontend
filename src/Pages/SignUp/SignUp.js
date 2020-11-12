import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { GrFacebook, GrApple } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { JHAPI } from "../../config";

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

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    axios
      .post(`${JHAPI}/user/signup`, {
        name: isInputValue.isInputUserName,
        email: isInputValue.isInputEmail,
        phone_number: isInputValue.isInputPhoneNumber,
        password: isInputValue.isInputPassword,
        re_password: isInputValue.isInputPasswordCheck,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("회원가입에 성공했습니다!");
          history.push("/Login");
        }
      })
      .catch((err) => {
        if (err.message.includes("409")) {
          alert("이미 가입된 회원입니다.");
        }
      });
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
            />
            {!isInputValue.isInputEmail?.includes("@") ? (
              <span>이메일 주소를 정확히 입력해주세요.</span>
            ) : (
              ""
            )}
          </div>
          <div className="phoneNumber">
            <label>휴대전화 번호</label>
            <input
              type="number"
              name="isInputPhoneNumber"
              onChange={handleChangeInput}
              placeholder="-를 제외한 휴대폰 번호를 입력해주세요"
            />
            {isInputValue.isInputPhoneNumber?.length <= 10 ? (
              <span>휴대전화번호를 정확히 입력해주세요.</span>
            ) : (
              ""
            )}
          </div>
          <div className="password">
            <label>비밀번호(8자 이상)</label>
            <input
              type="password"
              name="isInputPassword"
              onChange={handleChangeInput}
              placeholder="********"
            />
            {isInputValue.isInputPassword?.length < 8 ? (
              <span> 비밀번호는 최소 8자 입니다.</span>
            ) : (
              ""
            )}
          </div>
          <div className="passwordConfirm">
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="isInputPasswordCheck"
              onChange={handleChangeInput}
              placeholder="********"
            />
            {isInputValue.isInputPasswordCheck !== isInputValue.isInputPassword ? (
              <span> 비밀번호가 일치하지 않습니다.</span>
            ) : (
              ""
            )}
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
      margin: 10px 0;
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
      display: inline-block;
      margin-bottom: 10px;
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
      display: inline-block;
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
