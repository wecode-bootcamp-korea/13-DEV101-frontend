import React from "react";
import Styled from "styled-components";

const Slick = () => {
  return (
    <Wrap>
      <div></div>
    </Wrap>
  );
};

export default Slick;

const Wrap = Styled.div`
    margin: 32px 32px 0;
    div {
    position: sticky;
    top: 108px;
    width: 360px;
    height: 560px;
    background: #324042;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px, rgba(0, 0, 0, 0.03) 0px 3px 6px, rgba(0, 0, 0, 0.05) 0px 8px 12px, rgba(0, 0, 0, 0.06) 0px 12px 18px;
    border-radius: 12px;
    overflow: hidden;
    }
`;
