import React, { useState, useEffect } from "react";
import axios from "axios";
import Styled, { css } from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import { AiOutlineCheck } from "react-icons/ai";
import { GetOrderInfo } from "../../store/PaymentReducer";
import { useDispatch, useSelector } from "react-redux";
import { Hr, ORDER_API } from "../../utils";

const Payment = () => {
  const dispatch = useDispatch();
  const [method, setMethod] = useState("card");
  const [isSmsAuth, setIsSmsAuth] = useState(false);
  const { id: classId } = useParams();
  const {
    creator,
    class_image,
    username,
    phone_number,
    price,
    discount,
    total,
  } = useSelector((state) => state.PaymentReducer.orderInfo);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [smsCheck, setSmsCheck] = useState(0);
  console.log(classId);
  const history = useHistory();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCheck = (e) => {
    setSmsCheck(e.target.value);
  };

  useEffect(() => {
    axios.get(`${ORDER_API}${classId}`).then((res) => {
      dispatch(GetOrderInfo(res.data));
      setName(username);
      setPhoneNumber(phone_number);
    });
  }, []);

  const moveCardPage = () => {
    history.push(`/detail/${classId}/cardpayment`);
  };

  const smsSubmit = async () => {
    try {
      const result = await axios.post("http://10.58.1.45:8000/order/smsauth", {
        phone_number: phoneNumber,
      });
      console.log(result);
      setIsSmsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  const smsChecked = async () => {
    try {
      await axios.post("http://10.58.1.45:8000/order/smsauthcheck", {
        phone_number: phoneNumber,
        auth_number: smsCheck,
      });
      alert("정상적으로 인증되셨습니다.");
      setIsSmsAuth(false);
    } catch (err) {
      alert("인증번호가 틀렸습니다.");
      console.log(err);
    }
  };

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
              <span> {creator} 온라인 수강권 (20주) </span>
              <div>
                <img src={class_image} alt="classImage" />
              </div>
            </div>
          </OrderInfo>
          <Hr margin="24px 0" />
          <ContactInfo>
            <h3> 연락처 정보 </h3>
            <div className="callInfo">
              <div>
                <span> 받으시는 분 </span>
                <input value={name} onChange={handleName} type="text" />
              </div>
              <div>
                <span> 휴대폰 정보 </span>
                <input value={phoneNumber} onChange={handlePhone} type="text" />
              </div>
              <div onClick={smsSubmit} className="smsAuth">
                <button>인증번호 전송</button>
              </div>
              {isSmsAuth && (
                <div>
                  <input
                    value={smsCheck}
                    onChange={handleCheck}
                    placeholder="인증번호를 입력해주세요"
                    type="text"
                  />
                  <button onClick={smsChecked} className="smsAuthCheck">
                    인증번호 확인
                  </button>
                </div>
              )}
            </div>
          </ContactInfo>
          <Hr margin="24px 0" />
          <PaymentAmount>
            <h3> 결제 금액 </h3>
            <div>
              <span>
                <h5> 총 상품 금액 </h5> <span>{price}원</span>
              </span>
              <span>
                <h5> 상품 할인 금액 </h5>
                <span>- {discount}원</span>
              </span>
              <span className="lastAmount">
                <h5>최종 가격</h5>
                <span>{total}원</span>
              </span>
              <Button color="#ff922b" bgcolor="#fff9f2">
                쿠폰 적용하기
              </Button>
            </div>
          </PaymentAmount>
          <Hr margin="24px 0" />
          <PaymentMethod>
            <button onClick={() => setMethod("Npay")}>
              <span>Npay</span>
              {method === "Npay" && <AiOutlineCheck size={20} />}
            </button>
            <button onClick={() => setMethod("card")}>
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
      border-radius: ${({ theme }) => theme.radius.small};
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
  background: #f8f8f9;
`;

const Main = Styled.div`
background: white;
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
          padding: 18px 0;
          font-size: 25px;
          font-weight: 600;
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
        .smsAuth, {
          button {
            background: gray;
            color: white;
          cursor: pointer;
          }
        }
        .smsAuthCheck {
          background: gray;
          cursor: pointer;
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
      color: ${({ theme }) => theme.colors.deepGray};
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

    .lastAmount {
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
  button {
    width: 100%;  
    display: flex;
    line-height: 1.5;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 15px;
    background: white;
    outline: none;
    border-radius: ${({ theme }) => theme.radius.small};
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
