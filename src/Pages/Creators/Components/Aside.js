import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { useLocation } from "react-router-dom";

const tabList = [
  { url: "intro", label: "기본 정보" },
  { url: "title", label: "제목 및 커버" },
  { url: "info", label: "소개" },
  { url: "last", label: "오픈 전 확인사항" },
];
const Aside = () => {
  const location = useLocation();
  const [currentHistory, setCurrentHistory] = useState("/intro");

  useEffect(() => {
    setCurrentHistory(location.pathname);
  }, [location]);

  return (
    <Wrap>
      <div>
        {tabList.map(({ url, label }, i) => (
          <Link to={`${url}`}>
            <div className={`NumberList ${currentHistory === "/" + url ? "Clicked" : ""}`} key={i}>
              <div>{i}</div>
              <span>{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </Wrap>
  );
};

const Wrap = Styled.div`
  width: 280px;
  padding: 25px 0;
  border-right: 1px solid #edeff0;
   > div {
     position: fixed;
     width:  inherit;
   }
  .NumberList {
    display: flex;
    margin: 0 20px;
    padding: 10px 15px;
    cursor: pointer;
    margin: 15px;
    border-radius: 4px;
      &:hover {
        background: #e6e6e6;
      }
    > div {
    margin-right: 12px;
    background: white;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dde0e2;
    border-radius: 6px;
    font-size: 11px;
    color: rgb(133, 138, 141);
    line-height: 16px;
    }
  span {
  color: gray;
  font-size: 16px;
    color: rgb(133, 138, 141);
    line-height: 24px;
    margin: 0px;
}
}
  .Clicked {
    background: #f8f8f9;
    div {
      border: 1px solid black;
    }
    span {
      color: black;
      font-weight: bold;
    }
  }
`;

export default Aside;
