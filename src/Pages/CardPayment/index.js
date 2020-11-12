import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { AiFillWarning } from "react-icons/ai";
import CreaditCard from "./Components/CreaditCard";
import Popup from "./Components/Popup";
import { useSelector } from "react-redux";
import { range } from "../../utils";

const MONTHS = range(1, 12);
const YEARS = range(19, 25);
const INSTALLMONTHS = range(2, 12);

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("월");
  const [cardYear, setCardYear] = useState("년");
  const [cardPassword, setCardPassword] = useState("");
  const [cardBirthday, setCardBirthday] = useState("");
  const [planMonth, setPlanMonth] = useState(0);
  const [cardNumberValidation, setCardNumberValidation] = useState(true);
  const [cardPasswordValidation, setCardPasswordValidation] = useState(true);
  const [cardMonthYearValidation, setCardMonthYearValidation] = useState(true);
  const [cardBirthdayValidation, setBirthdayValidation] = useState(true);
  const [isAllValidation, setIsAllValidation] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const { total } = useSelector((state) => state.PaymentReducer.orderInfo);

  useEffect(() => {
    if (cardBirthday.length === 6) setBirthdayValidation(true);
    if (cardPassword.length === 2) setCardPasswordValidation(true);
    if (cardNumber.replace(/ /gi, "").length === 16) {
      setCardNumberValidation(true);
    }
    if (Number(cardMonth) && Number(cardYear)) {
      setCardMonthYearValidation(true);
    }
  }, [cardBirthday, cardPassword, cardNumber, cardMonth, cardYear]);

  const onChangeCardNumber = (e) => {
    let cardValue = e.target.value.replace(/[^0-9.]/g, "");
    if (cardNumber.length > 1) {
      cardValue = e.target.value
        .replace(/[^0-9.]/g, "")
        .match(new RegExp(".{1," + 4 + "}", "g"))
        .join(" ");
    }
    setCardNumber(cardValue);
  };

  const onChangecardMonth = (e) => {
    setCardMonth(e.target.value);
  };
  const onChangecardYear = (e) => {
    setCardYear(e.target.value);
  };

  const onChangePassword = (e) => {
    setCardPassword(e.target.value.replace(/[^0-9.]/g, ""));
  };

  const onChangeBirthDay = (e) => {
    setCardBirthday(e.target.value.replace(/[^0-9.]/g, ""));
  };

  const onPlanMonth = (e) => {
    setPlanMonth(e.target.value === "일시불" ? "0" : e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (cardNumber.replace(/ /gi, "").length === 16) {
      setCardNumberValidation(true);
    } else {
      setCardNumberValidation(false);
    }
    if (Number(cardMonth) && Number(cardYear)) {
      setCardMonthYearValidation(true);
    } else {
      setCardMonthYearValidation(false);
    }
    if (cardPassword.length === 2) {
      setCardPasswordValidation(true);
    } else {
      setCardPasswordValidation(false);
    }
    if (cardBirthday.length === 6) {
      setBirthdayValidation(true);
    } else {
      setBirthdayValidation(false);
    }
    if (
      cardNumberValidation &&
      cardPasswordValidation &&
      cardMonthYearValidation &&
      cardBirthdayValidation
    ) {
      setPaymentSuccess(true);
    }
    setIsAllValidation(true);
    setTimeout(() => {
      setIsAllValidation(false);
      setPaymentSuccess(false);
    }, 2000);
  };
  return (
    <CardPaymentWrap>
      <div className="main">
        <Header>
          <span>
            <h2>카드 결제</h2>
            <span className="totalPaymentAmount">
              <span>총 결제 금액</span> <h3>{total}원</h3>
            </span>
          </span>
        </Header>
        <div className="creaditCard">
          <CreaditCard cardNumber={cardNumber} cardMonth={cardMonth} cardYear={cardYear} />
        </div>
        <CardInfo>
          <form>
            <div className="cardInfos">
              <div className="cardNumber inputForm">
                <label>카드번호</label>
                <input
                  className={
                    cardNumber.replace(/ /gi, "").length === 16
                      ? "trueValid"
                      : !(cardNumber.replace(/ /gi, "").length === 0) && "falseValid"
                  }
                  value={cardNumber}
                  maxlength="19"
                  placeholder="0000 0000 0000 0000"
                  onChange={onChangeCardNumber}
                  type="text"
                  autocomplete="off"
                />
                {!cardNumberValidation && (
                  <p className="validation">
                    <AiFillWarning />
                    <span>카드 번호를 입력해주세요</span>
                  </p>
                )}
              </div>
              <div className="Validity inputForm">
                <label>유효기간</label>
                <div className="ValidityMonthYear">
                  <select
                    className={
                      Number(cardMonth) ? "trueValid" : !cardMonthYearValidation && "falseValid"
                    }
                    value={cardMonth}
                    onChange={onChangecardMonth}
                  >
                    <option disabled selected>
                      월
                    </option>
                    {MONTHS.map((month) => (
                      <option value={month}>{month}</option>
                    ))}
                  </select>
                  <select
                    className={
                      Number(cardYear) ? "trueValid" : !cardMonthYearValidation && "falseValid"
                    }
                    value={cardYear}
                    onChange={onChangecardYear}
                  >
                    <option disabled selected>
                      년
                    </option>
                    {YEARS.map((year) => (
                      <option value={year}>20{year}</option>
                    ))}
                  </select>
                  {!cardMonthYearValidation && (
                    <p className="validation">
                      <AiFillWarning />
                      <span>유효 기간을 선택해주세요</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="inputWrap2">
              <div className="personal inputForm">
                <label>비밀번호 앞 2자리</label>
                <input
                  className={
                    cardPassword.length === 2
                      ? "trueValid"
                      : !(cardPassword.length === 0) && "falseValid"
                  }
                  value={cardPassword}
                  onChange={onChangePassword}
                  placeholder="XX"
                  maxlength={2}
                  type="password"
                />
                {!cardPasswordValidation && (
                  <p className="validation">
                    <AiFillWarning />
                    <span>카드 비밀번호 앞 2자리를 입력해주세요.</span>
                  </p>
                )}
              </div>
              <div className="birthDay inputForm">
                <label>생년월일 6자리</label>
                <input
                  className={
                    cardBirthday.length === 6
                      ? "trueValid"
                      : !(cardBirthday.length === 0) && "falseValid"
                  }
                  value={cardBirthday}
                  onChange={onChangeBirthDay}
                  maxlength={6}
                  placeholder="951026"
                  type="text"
                />
                {!cardBirthdayValidation && (
                  <p className="validation">
                    <AiFillWarning />
                    <span>생년월일을 입력해주세요</span>
                  </p>
                )}
              </div>
            </div>
            <div className="installMonth inputForm">
              <label>할부 개월</label>
              <select value={planMonth} onChange={onPlanMonth}>
                <option>일시불</option>
                {INSTALLMONTHS.map((month) => (
                  <option value={month}>{month}개월</option>
                ))}
              </select>
            </div>
            <button className="paymentSubmit" onClick={onSubmit}>
              결제하기
            </button>
          </form>
        </CardInfo>
      </div>
      {paymentSuccess && <Popup type="success" />}
      {isAllValidation && !paymentSuccess && <Popup type="failed" />}
    </CardPaymentWrap>
  );
};

export default CardPayment;

const CardPaymentWrap = Styled.div`
position: relative;
display: flex;
justify-content: center;
background: ${({ theme }) => theme.colors.softGray};
.main {
  background: white;
  max-width: 640px;
  width: 100%;
  padding: 0 10px;
  .creaditCard {
    display: flex;
    justify-content: center;
  }
}
`;

const Header = Styled.div`
    background: black;
    padding: 23px;
    > span {
      color: white;
      h2 {
        padding-bottom: 23px;
        font-size: 25px;
        font-weight: 600;
      }
      .totalPaymentAmount {
        display: flex;
        justify-content: space-between;
        span {
        }
        h3 {
          color: ${({ theme }) => theme.colors.orangeColor};
        }
      }
    }`;

const CardInfo = Styled.form`
.cardInfos {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.validation {
  display: flex;
  align-items: center;
  margin: 3px;
  color: red;
  letter-spacing: -2;
  svg {
    font-size: 14px;
  }
  span {
  font-size: 11px;
    padding-left: 3px;
  }
}
.inputForm {
        display: flex;
        flex-direction: column;
        line-height: 1.5;
        margin: 10px 0;
    label {
      font-size: 14px;
    }
    input {
      font-size: 18px;
      padding: 13px 13px;
      border: 1px solid #bdc2c6;
      border-radius: 2px;
      outline: none;
      width:100%;
    }
    .trueValid {
      box-shadow: 0 0 1px .5px green;
    }
    .falseValid {
      box-shadow: 0 0 2px .5px red;
    }
    select {
      width: 200px;
      appearance: none;
      outline: none;
      border: 1px solid #bdc2c6;
      border-radius: 2px;
      padding: 11px 11px;
        width: 20%;
        font-size: 18px;
        
      }
}
      .cardNumber {
          width: 50%;
          padding-right: 10px;
        input {
          width: initial;
          text-align:left;
        }
      }
    .Validity {
        width: 50%;
        .ValidityMonthYear {
      select {
        width:46%;
        margin-right: 10px;
      }
        }
    }
    .inputWrap2 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      > div {
        width: 50%;
        margin-right: 10px;
        input {
          width: initial;
        }
      }
    }
    .installMonth {
      select {
        width: 100%;
      }
      margin-bottom: 30px;
    }
    .paymentSubmit {
      width: 100%;
      padding: 13px 0;
      border-radius: 3px;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      background: ${({ theme }) => theme.colors.orangeColor};
      color: white;
      margin-bottom: 20px;
    }
`;
