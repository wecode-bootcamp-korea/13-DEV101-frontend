import React, { useState } from "react";
import LoginAnother from "./LoginAnother";
import axios from "axios";
import styled from "styled-components";
import { RiEarthFill, RiKakaoTalkFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [isLoginAnother, setIsLoginAnother] = useState(false);
  const [isInputEmail, setIsInputEmail] = useState("");
  const [isInputPw, setIsInputPw] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const loginToDifferentWays = () => {
    setIsLoginAnother(!isLoginAnother);
    setIsMounted(!isMounted);
  };

  const inputEmailId = (e) => {
    setIsInputEmail(e.target.value);
  };

  const inputEmailPw = (e) => {
    setIsInputPw(e.target.value);
  };

  const KakaoAPI = "http://10.58.7.131:8000/user/kakao/login";
  const { Kakao } = window;
  const history = useHistory();

  const loginWithKakao = () => {
    console.log(Kakao.Auth);
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(KakaoAPI, {
          method: "GET",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("Kakao_token", res.access_token);
            if (res.access_token) {
              alert(res.access_token);
              history.push("/");
            }
          });
      },
    });
  };

  const selectObj = ["한국어", "영어", "일본어", "한국어"];

  return (
    <div className="Login">
      <LoginPageBody>
        <LoginPage>
          <LoginPageHeader>
            <img src="../Images/dev101.png" alt="logo" />
            <div className="selectLang">
              <RiEarthFill />
              <select>
                {selectObj.map((el) => (
                  <option>{el}</option>
                ))}
              </select>
            </div>
          </LoginPageHeader>
          {isLoginAnother ? (
            <LoginAnother
              isInputEmail={isInputEmail}
              isInputPw={isInputPw}
              inputEmailId={inputEmailId}
              inputEmailPw={inputEmailPw}
            />
          ) : (
            <LoginPageForm>
              <div>
                <p>준비물까지 챙겨주는 온라인 클래스</p>
                <Button kakao onClick={() => loginWithKakao()}>
                  <RiKakaoTalkFill />
                  카카오로 3초 만에 시작하기
                </Button>
                <Button anotherWay onClick={loginToDifferentWays}>
                  다른 방법으로 시작하기
                </Button>
              </div>
            </LoginPageForm>
          )}
        </LoginPage>
        <LoginPageBackground />
      </LoginPageBody>
    </div>
  );
};

export default Login;

const LoginPageBody = styled.div`
  display: flex;
`;

const LoginPageBackground = styled.div`
  background-image: url(../images/LoginBackground.jpg);
  background-size: cover;
  background-repeat: none;
  width: 50%;
  height: 100vh;
  position: absolute;
  right: 0;
  overflow: hidden;
`;

const LoginPage = styled.div`
  width: 50%;
  height: 100vh;
`;

const LoginPageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 15%;

  img {
    width: 100px;
    height: 30px;
  }

  .selectLang {
    color: #a8aeb3;

    select {
      border: none;
      color: #a8aeb3;
      appearance: none;
    }
  }
`;

const LoginPageForm = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 50px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  border: none;
  background-color: ${(props) => (props.kakao ? "#ffe812" : "#f8f8f9")};
  color: ${(props) => (props.kakao ? "#000000" : "#3e4042")};
`;
