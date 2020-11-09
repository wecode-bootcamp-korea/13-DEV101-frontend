import React from "react";
import Styled from "styled-components";
import { Hr } from "../../utils";

const index = () => {
  return (
    <Wrap>
      <div className="header">
        <h2>결제 완료</h2>
        <Hr />
      </div>
      <div className="main">
        <h3>구매해주셔서 감사합니다</h3>

        <div>
          <span>
            <h4>Class 제목</h4> 999,99원
          </span>
        </div>
        <div>
          <button>돌아가기</button>
        </div>
      </div>
    </Wrap>
  );
};

export default index;

const Wrap = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 200px;
  
  .header {
    width: 100%;

    h2 {
      padding: 15px 0;
      font-size: 30px;
      font-weight: 600;
    }
  }

  .main {
  ${({ theme }) => theme.flexCenters};
  flex-direction: column;

    h3 {
      font-size: 25px;
    }
  }
`;
