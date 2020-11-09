import React from "react";
import styled from "styled-components";

const Button = ({ children, subText, ...stylesProps }) => {
  return (
    <ButtonStyle {...stylesProps}>
      <span className="text">{children}</span>
      <p className="subtext">{subText}</p>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  ${({ theme }) => theme.flexCenter};
  background: ${({ bgcolor }) => bgcolor || "black"};
  color: ${({ color }) => color || "white"};
  width: ${({ width }) => width || "100%"};
  padding: 15px;
  border-radius: ${({ theme }) => theme.radius.small};
  font-weight: ${({ weight }) => weight || "600"};
  text-align: center;
  cursor: pointer;

  .text {
    color: inherit;
    font-weight: inherit;
    padding: 0 5px;
  }

  .subtext {
    font-size: 11px;
    font-weight: 400;
  }
`;

export default Button;
