import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const LeftMenuCard = ({ menuTitle, menuList }) => {
  return (
    <LeftMenuCardContainer bold={menuTitle}>
      <div className="cardTitle">{menuTitle}</div>
      <div className="cardMenu">
        {menuList?.map((list, idx) => {
          return (
            <div key={idx} className="cardMenuItem">
              <p dangerouslySetInnerHTML={{ __html: list }} />
              <IoIosArrowForward size={18} opacity={0.2} />
            </div>
          );
        })}
      </div>
    </LeftMenuCardContainer>
  );
};

export default LeftMenuCard;

const LeftMenuCardContainer = styled.section`
  margin: 16px 0 32px;

  .cardTitle {
    font-size: 14px;
    font-weight: bold;
    color: #1b1c1d;
    line-height: 20px;
    letter-spacing: -0.15px;
  }

  .cardMenu {
    border-radius: 3px;
    overflow: hidden;
    margin-top: 9.5px;

    div {
      height: 50px;
      padding: 0 16px;
      border-bottom: 1px solid rgb(237, 239, 240);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: ${(props) => (props.bold === "멤버십" ? "800" : "normal")};
      line-height: 20px;
      color: #1b1c1d;
      background-color: rgb(248, 248, 249);
      cursor: pointer;

      :last-child {
        border: 0px;
      }

      p {
        span {
          color: rgb(243, 51, 64);
          font-weight: 900;
        }
      }
    }
  }
`;
