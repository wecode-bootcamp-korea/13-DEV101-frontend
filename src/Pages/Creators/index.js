import React, { useState } from "react";
import Nav from "./Components/Nav";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";
import Slick from "./Components/Slick";
import Styled from "styled-components";
import Intro from "./Chapter/Intro";
import Info from "./Chapter/Info";
import Title from "./Chapter/Title";
import Last from "./Chapter/Last";
import { AiOutlineClose } from "react-icons/ai";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

const Creators = () => {
  const [isExit, setIsExit] = useState(false);

  const handleExit = () => {
    setIsExit((prev) => !prev);
  };

  return (
    <Router>
      <Wrap>
        <Nav handleExit={handleExit} />
        <div className="Main">
          <Aside />
          <Switch>
            <div className="Content">
              <Route path="/intro" component={Intro} />
              <Route path="/title" component={Title} />
              <Route path="/info" component={Info} />
              <Route path="/last" component={Last} />
              <Route exact path="/" component={Intro} />
            </div>
          </Switch>
          <Slick />
        </div>
        {isExit && (
          <div className="exitModal">
            <div>
              <div className="modalTitle">
                <h2>
                  크리에이터님 <br /> 정말 나가실거에요?
                </h2>
              </div>
              <span>
                오늘, 마음먹은 김에 바로 페이지 작성을 완료하고 크리에이터님을 기다리는 수강생들을
                만나세요! 조금만 더 힘내봐요 우리!
              </span>
              <div className="buttons">
                <button onClick={() => alert("안돼요 못나가요")}>싫어요 나갈래요</button>
                <button onClick={handleExit}>계속 작성할래요</button>
              </div>
              <div className="exitButton" onClick={handleExit}>
                <AiOutlineClose size={24} />
              </div>
            </div>
          </div>
        )}
        <Footer />
      </Wrap>
    </Router>
  );
};

const Wrap = Styled.div`
.exitModal {
    position: fixed;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    z-index: 10000001;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.72);
    opacity: 1;
    visibility: visible;
    overflow: hidden;
    overscroll-behavior: contain;
    > div {
      position: relative;
      display: flex;
    flex-direction: column;
    width: 480px;
    max-height: 800px;
    padding: 32px;
    border-radius: 8px;
    background: white;
      h2 {
        font-size: 25px;
        font-weight: 600;
        line-height: 35px;
      }
    span {
      padding: 20px 0;
      line-height: 22px;
    }
    .buttons {
        display: flex;
        justify-content: space-around;
        button {
          font-size: 15px;
          border-radius: 3px;
          padding: 10px 0;
          cursor: pointer;
        }
        button:first-of-type {
          width: 45%;
          background: #f8f8f9;
          &:hover {
            background: #dddde1;
          }
        }
        button:last-of-type {
          width: 55%;
          margin-left: 20px;
          color: white;
          background: #ff922b;
          &:hover {
            background: #f77800;
          }
          
        }
      }

    .exitButton {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
    }
  }
.Main {
  display: flex;
  min-height: calc(100vh - 60px);
  .Content {
    display: flex;
  justify-content: center;
  flex: 1 1 0%;
  max-width: 986px;
  text-align: left;
  width: 100%;
  div {
    width: 100%;
  }
  }
}
 * {
   &::selection {
     background-color: #ff5845;
     color: white;
    }
  }
`;

export default Creators;
