import React from "react";
import Styled from "styled-components";

const CreaditCard = ({ cardNumber, cardMonth, cardYear }) => {
  return (
    <CreaditCardWrap>
      <div className="ssel">
        <img
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
          alt=""
        />
      </div>
      <div>
        <h3>{cardNumber}</h3>
      </div>
      <span>
        {cardMonth} / {cardYear.split("").splice(cardYear.length - 2)}
      </span>
    </CreaditCardWrap>
  );
};

export default CreaditCard;

const CreaditCardWrap = Styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #0f0f0f 5%, #f0f4fd 90%);
  border-radius: 20px;
  width:430px;
  height: 250px;
  margin: 20px 0;
  .ssel {
    position: absolute;
    top: 23px;
    left: 23px;
    width: 60px;
    img {
      width: inherit;
    }
  }
  div {
    display: flex;
    transform: translateX(15%);
    width: 100%;
    text-align:left;
    h3 {
      transform: translateY(50%);
      background: linear-gradient(#0f0f0f, #ffffff, #0f0f0f);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 28px;
    }
  }
  span {
    position: absolute;
    bottom: 40px;
    right: 40px;
    background: linear-gradient(-75deg, #0f0f0f, #ffffff);;
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
`;
