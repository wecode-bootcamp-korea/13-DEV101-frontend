import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  const location = useLocation();
  const [currentHistory, setCurrentHistory] = useState("/intro");
  useEffect(() => {
    setCurrentHistory(location.pathname);
  }, [location]);

  const handlePrev = () => {
    if (currentHistory === "/last") {
      history.push("/info");
    } else if (currentHistory === "/info") {
      history.push("/title");
    } else if (currentHistory === "/title") {
      history.push("/intro");
    }
  };

  return (
    <Wrap>
      <button onClick={handlePrev} className={`prev ${currentHistory === "/intro" && "hidden"}`}>
        이전
      </button>
      <button disabled className="save">
        저장하기
      </button>
      <button className="next">다음</button>
    </Wrap>
  );
};

export default Footer;

const Wrap = Styled.div`
  position: fixed;
  right:0;
  bottom:0;
  display:flex;
  align-items: center;
  width: calc(100% - 280px);
  padding: 18px 32px;
  border-top: 1px solid #edeff0;
  background: white;
  button {
    cursor: pointer;
    font-size: 16px;
    border-radius: 3px;
    padding: 0 16px;
    height: 40px;
  }
  .hidden {
    display: none;
  }
  .prev {
    &:hover {
      background: #dddde1;
    }
  }
  .save {
    margin-left: auto;

  }
  .next {
    color: white;
    background: #ff922b
  }
  `;
