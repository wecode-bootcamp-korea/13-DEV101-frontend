import React from "react";
import Styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { RecommendLabel } from "./Label";
import { AiFillYoutube } from "react-icons/ai";

const PackageCard = ({ ClassInfo }) => {
  const history = useHistory();
  const location = useLocation();

  const handlePayment = () => {
    history.push("/detail/id/payment");
  };
  const {
    classTitle,
    discount,
    discountAmount,
    totalAmount,
    fivePlanAmount,
  } = ClassInfo;
  return (
    <CardWrap>
      <div className="main">
        <RecommendLabel />
        <h4>[슈퍼 얼리버드] 수강권 Only</h4>
        <div>
          <span>
            <AiFillYoutube />
            <span>{classTitle}</span>
          </span>
          <p>
            <span>{discount}%</span> {discountAmount}원
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="hr">
          <hr />
        </div>
        <span>
          <p>{totalAmount}원</p>
          <p>{discountAmount}원</p>
        </span>
        <div className="Percentage">
          <h3>31%</h3>
          <span>
            <p>5개월 할부 시</p> <h4>월 {fivePlanAmount}원</h4>
          </span>
        </div>
        <div onClick={handlePayment} className="button">
          <span>구매하기</span>
        </div>
      </div>
    </CardWrap>
  );
};

export default PackageCard;

const CardWrap = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  box-shadow: rgba(41, 42, 43, 0.16) 0px 2px 6px -2px;
  border-radius: ${({ theme }) => theme.radius.small};
  border: 1px solid #f8f8f9;
  height: 389px;
  width: 50%;
  min-width: 320px;
  overflow-x: hidden;

  .main {

    > h4 {
      font-size: 20px;
      font-weight: 600;
      margin: 12px 0;
    }

    div {

      > span {
        color: ${({ theme }) => theme.colors.softGray};
        display: flex;
        align-items: center;

        span {
          color: black;
          padding: 0 5px;
          font-size: 14px;
        }
      }

      > p {
        font-size: 11px;
        margin: 3px 22px;
        color: ${({ theme }) => theme.colors.deepGray};

        span {
          color: #fc3d46;
          font-weight: bold;
        }
      }
    }
  }
  .footer {
    .hr {
      width: 120%;
      transform: translateX(-10%);
      padding: 10px;

      > hr {
        border: none;
        height: 1px;
        background: #edeff0;
      }
    }
    > span:first-of-type {
      display: flex;
      justify-content:flex-end;
      font-size: 11px;
      color: ${({ theme }) => theme.colors.deepGray};

      p:first-of-type {
        text-decoration:line-through;
      }

      > p {
        padding: 0 3px;
        margin: 0;
      }
    }
    > .Percentage {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;

      h3 {
        color:#fc3d46;
        margin: 0;
        font-size: 22px;
        font-weight: 700;
      }

      span {
        display: flex;
        align-items: center;

        p {
          font-size: 11px;
          padding: 0 4px;
          margin:0;
        }

        h4 {
          margin:0;
          font-size: 17px;
          font-weight: 600;
        }
      }
    }
        .button {
          display: flex;
          justify-content: center;
          border-radius: ${({ theme }) => theme.radius.base};
          padding: 10px 0;
          background: ${({ theme }) => theme.colors.orangeColor};
          color: white;
          cursor: pointer;

              span {
                text-align: center;
                font-size: 14px;
              }
        }
  }
    `;
