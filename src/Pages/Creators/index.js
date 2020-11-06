import React, { useState, useEffect } from "react";
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

const Creators = () => {
  const [isExit, setIsExit] = useState(false);
  const [currentPage, setCurrentPage] = useState("intro");
  const [coverImg, setCoverImg] = useState({});
  const [thumbnailImg, setThumbnailImg] = useState({});
  const [info, setInfo] = useState({
    one: {},
    two: {},
    three: {},
  });

  const handleExit = () => {
    setIsExit((prev) => !prev);
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleCoverImg = (type, data) => {
    if (type.toString() === "cover") {
      console.log("cover");
      setCoverImg(data);
    } else if (type.toString() === "thumbnail") {
      console.log("thumbnail");
      setThumbnailImg(data);
    }
  };

  useEffect(() => {
    console.log(info);
  }, [info]);
  const handleInfoImg = (type, data) => {
    if (type === 0) {
      setInfo({ ...info, one: { ...info.one, src: data } });
    } else if (type === 1) {
      setInfo({ ...info, two: { ...info.two, src: data } });
    } else if (type === 2) {
      setInfo({ ...info, three: { ...info.three, src: data } });
    }
  };

  const handleInfoDesc = (type, data) => {
    if (type === 0) {
      setInfo({ ...info, one: { ...info.one, desc: data } });
    } else if (type === 1) {
      setInfo({ ...info, two: { ...info.two, desc: data } });
    } else if (type === 2) {
      setInfo({ ...info, three: { ...info.three, desc: data } });
    }
  };

  return (
    <Wrap>
      <Nav handleExit={handleExit} />
      <div className="Main">
        <Aside currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
        <Content>
          {currentPage === "intro" && <Intro />}
          {currentPage === "title" && <Title handleCoverImg={handleCoverImg} />}
          {currentPage === "info" && (
            <Info handleInfoImg={handleInfoImg} handleInfoDesc={handleInfoDesc} />
          )}
          {currentPage === "last" && <Last />}
        </Content>
        <Slick />
      </div>
      {isExit && (
        <ExitModal>
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
            <Buttons>
              <button onClick={() => alert("안돼요 못나가요")}>싫어요 나갈래요</button>
              <button onClick={handleExit}>계속 작성할래요</button>
            </Buttons>
            <div className="exitButton" onClick={handleExit}>
              <AiOutlineClose size={24} />
            </div>
          </div>
        </ExitModal>
      )}
      <Footer
        info={info}
        coverImg={coverImg}
        thumbnailImg={thumbnailImg}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
    </Wrap>
  );
};

const Wrap = Styled.div`
.Main {
  display: flex;
  min-height: calc(100vh - 60px);
}
`;

const ExitModal = Styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 1001;
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

  .exitButton {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  }
`;

const Content = Styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 0%;
  max-width: 986px;
  margin-bottom: 80px;
  text-align: left;
  width: 100%;
  padding: 20px;
  h3 {
      font-size: 24px;
      font-weight: 600;
      padding: 20px 0;
    }
  label {
    font-size: 14px;
    margin-bottom: 10px;
  }
  input, select {
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #dde0e2;
    color: #1b1c1d;
    border-radius: 1px;
    margin-bottom: 20px;
    flex: 1 1 auto;
    width: 100%;
    background-color: white;
    letter-spacing: -0.15px;
    margin-top: 5px;
    padding: 12px 20px;
    height: 48px;
    }
    select {
    font-weight: normal;
    -webkit-appearance: none;
    background-size: 18px;
    background-repeat: no-repeat;
    background-position: right 16px center;
    }
 
`;

const Buttons = Styled.div`
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
  
}`;

export default Creators;
