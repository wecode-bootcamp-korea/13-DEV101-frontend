import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineYoutube,
  AiFillGift,
  AiOutlineUser,
  AiOutlineLike,
  AiFillHeart,
} from "react-icons/ai";
import Button from "./Components/Button";
import { Hr, API, Tooltip } from "./Components/Utils";

const Aside = () => {
  const [category, setCategory] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [classTitle, setClassTitle] = useState("");
  const [price, setPrice] = useState("");
  const [heartCount, setHeartCount] = useState(0);
  const [isHeartToggle, setIsHeartToggle] = useState(false);
  const [level, setLevel] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios.get(API).then((res) => setLevel(res.data.detail.class_info.level));
  }, []);

  const contentItems = [
    [<AiOutlineYoutube size="18" />, <span>콘텐츠 이용권</span>],
    [<AiFillGift size="18" />, <span>준비물 키트</span>],
    [<AiOutlineUser size="18" />, <span>{level} 대상</span>],
    [<AiOutlineLike size="18" />, <span>개인 만족도</span>],
  ];

  useEffect(() => {
    axios.get(API).then((res) => {
      setCategory(res.data.detail_aside.category);
      setCreatorName(res.data.detail_aside.creator_name);
      setClassTitle(res.data.detail_aside.title);
      // setStatus(res.data.detail_aside.status);
      setPrice(Number(res.data.detail_aside.price).toLocaleString("en"));
      setHeartCount(res.data.detail_aside.heart);
    });
  }, []);

  const classRequest = (id) => {
    history.push(`/detail/${id}/payment`);
  };

  const heartButtonClick = () => {
    if (!isHeartToggle) {
      setHeartCount((prevState) => prevState + 1);
      setIsHeartToggle(true);
    } else {
      const result = window.confirm(
        "정말로 취소하시겠습니까? 알림 및 혜택을 받지 못하실 수 있습니다.",
      );
      if (result) {
        setHeartCount((prevState) => prevState - 1);
        setIsHeartToggle(false);
      }
    }
  };

  return (
    <AsideWrap>
      <div className="itemIntro">
        <p>
          {category} · {creatorName}
        </p>
        <h3>{classTitle}</h3>
        <span className="nowRegi">
          <div>바로 수강 가능</div>
        </span>
        <span className="installment">
          <div>5개월 할부</div>
          <h4>월 {price}원</h4>
        </span>
        <Hr />
        <div className="contentInfo">
          {contentItems.map(([icon, desc]) => (
            <div>
              {icon}
              <span>{desc}</span>
            </div>
          ))}
        </div>
        <Hr />
        <div className="buttons">
          <Tooltip />
          <Button
            onClick={() => classRequest("productid")}
            bgcolor="#ff922b"
            color="#fff"
            subText="6개 남음"
          >
            클래스 신청하기
          </Button>
          <div onClick={heartButtonClick} className="heartButton">
            <div>
              <span>
                {isHeartToggle ? (
                  <AiFillHeart style={{ color: "#fc3d46" }} />
                ) : (
                  <AiOutlineHeart />
                )}
              </span>
              <span>{heartCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="asideBanner">
        <div>
          <span>준비물까지 챙겨주는 온라인 클래스</span>
          <p>Dev101 온라인 클래스</p>
        </div>
        <div>
          <img src="https://class101.net/images/im-logo-block.png" alt="logo" />
        </div>
      </div>
    </AsideWrap>
  );
};

export default Aside;

const wrapMixed = css`
  padding: 24px;
  box-shadow: rgba(41, 42, 43, 0.16) 0px 2px 6px -2px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.softGray};
`;

const AsideWrap = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 31%;
  margin-left: 25px;
  max-height: 100vh;

  .itemIntro {
    ${wrapMixed}

    > p {
      font-size: 14px;
      margin-bottom: 8px;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      margin-bottom: 8px;
    }

    .nowRegi {
      margin-bottom: 4px;

      div {
        display: inline-block;
        background-color: ${({ theme }) => theme.colors.softGray};
        color: #9a9e91;
        padding: 8px 6px;
        font-size: 11px;
        font-weight: 600;
      }
    }

    .installment {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      font-weight: 600;

      div {
        font-size: 14px;
      }

      h4 {
        font-size: 18px;
      }
    }

    .contentInfo {
      display: flex;
      flex-wrap: wrap;

      div {
        display: flex;
        align-items: center;
        width: 50%;
        padding: 10px;

        span {
          font-size: 14px;
          padding-left: 8px;
        }
      }
    }

    .buttons {
      display: flex;
      position: relative;
      -webkit-user-select: none;
      user-select: none;

      .heartButton {
        display: flex;
        width: 55px;
        font-size: 14px;
        border-radius: ${({ theme }) => theme.radius.base};
        margin-left: 8px;
        font-weight: bold;
        background: #f8f9f9;
        cursor: pointer;

        div {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: inherit;
          span {
            text-align: center;
          }
        }
      }
    }
  }

  .asideBanner {
    display: flex;
    justify-content: space-between;
    ${wrapMixed}
    padding: 18px;
    margin-top: 15px;

    div {
      span {
        font-size: 14px;
        font-weight: bold;
      }

      p {
        color: gray;
        padding: 7px 0;
        font-size: 11px;
      }
      img {
        width: 35px;
      }
    }
  }
  @media ${({ theme }) => theme.tabletS} {
    position: static;
    width: 100%;
    order: -1;
    margin-left: 0;
    .itemIntro {
      width: inherit;
      h3 {
        font-size: 22px;
      }
      .installment {
        h4 {
          font-size: 24px;
        }
      }
      .contentInfo {
        div {
          justify-content: center;
        }
      }
      .buttons {
        .heartButton {
          width: 10%;
          justify-content: center;
        }
      }
    }
    .asideBanner {
      display: none;
    }
  }
`;
