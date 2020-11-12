import React, { useState, useEffect } from "react";
import axios from "axios";
import Styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import { AiOutlineCheck } from "react-icons/ai";
import {
  GetClassTitle,
  GetTotalAmount,
  GetDiscountAmount,
  GetUserInfo,
  GetPhoneNumber,
} from "../../store/PaymentReducer";
import { useDispatch, useSelector } from "react-redux";
import { Hr } from "../../utils";

const Payment = () => {
  const dispatch = useDispatch();
  const ClassInfo = useSelector((state) => state.PaymentReducer.currentClassInfo);
  const UserInfo = useSelector((state) => state.PaymentReducer.userInfo);
  const history = useHistory();
  const [method, setMethod] = useState("card");

  useEffect(() => {
    axios.get("http://localhost:3000/Data/PaymentData.json").then((res) => {
      dispatch(GetUserInfo(res.data.userInfo.name));
      dispatch(GetPhoneNumber(res.data.userInfo.phoneNumber));
      dispatch(GetClassTitle(res.data.currentClassInfo.classTitle));
      dispatch(GetTotalAmount(res.data.currentClassInfo.totalAmount));
      dispatch(GetDiscountAmount(res.data.currentClassInfo.discountAmount));
    });
  }, []);

  const moveCardPage = () => {
    history.push("/detail/id/cardpayment");
  };

  const ChangeMethod = (method) => {
    setMethod(method);
  };
  const { name, phoneNumber } = UserInfo;
  const { classTitle, discountAmount, totalAmount } = ClassInfo;

  return (
    <Wrap>
      <Main>
        <Header>
          <span>
            <h2> 결제하기 </h2>
          </span>
        </Header>
        <div className="mainWrap">
          <OrderInfo>
            <h3> 주문 정보 </h3>
            <div>
              <span> {classTitle} </span>
              <div>
                <img
                  src="https://cdn.class101.net/images/c34b5a9f-146d-4fe0-9e62-0e5605f837da/2048xauto.webp"
                  alt=""
                />
              </div>
            </div>
          </OrderInfo>
          <Hr margin="24px 0" />
          <ContactInfo>
            <h3> 연락처 정보 </h3>
            <div className="callInfo">
              <div>
                <span> 받으시는 분 </span> <input value={name} type="text" />
              </div>
              <div>
                <span> 휴대폰 정보 </span> <input value={phoneNumber} type="text" />
              </div>
            </div>
          </ContactInfo>
          <Hr margin="24px 0" />
          <PaymentAmount>
            <h3> 결제 금액 </h3>
            <div>
              <span>
                <h5> 총 상품 금액 </h5> <span>{totalAmount}원</span>
              </span>
              <span>
                <h5> 상품 할인 금액 </h5> <span>수정요망 원</span>
              </span>
              <span className="lastAmount">
                <h5>최종 가격</h5>
                <span>{discountAmount}원</span>
              </span>
              <Button color="#ff922b" bgcolor="#fff9f2">
                쿠폰 적용하기
              </Button>
            </div>
          </PaymentAmount>
          <Hr margin="24px 0" />
          <PaymentMethod>
            <button onClick={() => ChangeMethod("Npay")}>
              <span>Npay</span>
              {method === "Npay" && <AiOutlineCheck size={20} />}
            </button>
            <button onClick={() => ChangeMethod("card")}>
              <span>카드 결제</span>
              {method === "card" && <AiOutlineCheck size={20} />}
            </button>
          </PaymentMethod>
          <Hr margin="24px 0" />
          {method === "Npay" && (
            <Button bgcolor="#ff922b" onClick={moveCardPage}>
              결제하기
            </Button>
          )}
          {method === "card" && (
            <Button bgcolor="#ff922b" onClick={moveCardPage}>
              다음
            </Button>
          )}
          <Hr margin="24px 0" />
        </div>
      </Main>
    </Wrap>
  );
};

export default Payment;

const H3 = css`
  h3 {
    font-size: 19px;
    font-weight: 700;
    margin: 12px 0;
  }
`;

const Input = css`
  div {
    margin-bottom: 10px;
    span {
      font-size: 14px;
      padding: 3px 0;
    }
    input {
      border: 1px solid #bdc2c6;
      font-size: 14px;
      border-radius: 2px;
      padding: 14px 14px;
      &:focus {
        outline: 1px solid gray;
      }
    }
  }
`;

const Wrap = Styled.div`
  display: flex;
  justify-content: center;
`;

const Main = Styled.div`
max-width: 640px;
    width: 100%;
    .mainWrap {
      margin: 0 20px;
    }
`;
const Header = Styled.div`
      padding: 6px 20px;
      background: black;
      margin-bottom: 25px;
      span {
        color: white;
        h2 {
          
        }
      }
`;
const OrderInfo = Styled.div`
      ${H3}
      div {
        span {
          font-size: 15px;
        }
        div {
          padding-top: 5px;
          img {
            width: 110px;
          }
        }
      }
`;
const ContactInfo = Styled.div`
      ${H3}
      .callInfo {
        div {
        display: flex;
        flex-direction: column;
        }
      }
      div {
            ${Input}
      }
`;
const PaymentAmount = Styled.div`
  ${H3}
  div {
    > span {
      display: flex;
      justify-content: space-between;
      color: gray;
      font-weight: 300;
      h5 {
        margin: 3px 0;
      font-weight: 300;
        font-size: 14px;
      }
      span {
        fotn-size: 13px;
      }
    }
    > .lastAmount {
      padding: 15px 0;
      font-weight: bold;
      color: black;
       > h5 {
        font-weight: bold;
      }
    }
  }
`;
const PaymentMethod = Styled.div`
  display: flex;
  flex-direction: column;
  button {
    display: flex;
    line-height: 1.5;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 15px;
    background: white;
    outline: none;
    border-radius: 3px;
    border: 1px solid gray;
    text-align:left;
    padding: 15px;
    &:focus {
      border: 1px solid black;
    }
    span {
      font-size: 14px;
      color: black;
    }
    svg {
      color: green;
    }
  }
`;
