import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AiOutlineCopy, AiOutlineCalendar } from "react-icons/ai";

const WhatIsClass = () => {
  const { class_info } = useSelector((state) => state.DetailReducer.detail);

  return (
    <WhatIsClassWrap>
      <div className="whatClass">
        <h3>
          <span>{class_info?.level}</span>분들을 위한
        </h3>
        <h3>
          <span>{class_info?.class_detail}</span>
        </h3>
        <h3>클래스입니다.</h3>
      </div>
      <div className="classinfora">
        <div>
          <AiOutlineCalendar size={28} />
          <div>24주 수강 가능</div>
          <p>수강 기간 내 무제한 수강 가능합니다</p>
        </div>
        <div>
          <AiOutlineCopy size={28} />
          <div>{class_info?.sub_chapter}개 컨텐츠</div>
          <p>총 {class_info?.sub_chapter}개의 강의를 수강하실 수 있습니다</p>
        </div>
      </div>
    </WhatIsClassWrap>
  );
};

export default WhatIsClass;

const WhatIsClassWrap = styled.div`
  .whatClass {
    margin-bottom: 30px;

    h3 {
      font-size: 25px;
      font-weight: 600;
      line-height: 30px;

      span {
        color: #2a8fb4;
      }
    }
  }

  .classinfora {
    display: flex;

    div {
      width: 50%;

      div {
        font-size: 20px;
        font-weight: 600;
      }

      p {
        font-size: 14px;
        padding: 10px 0;
      }
    }
  }
`;
