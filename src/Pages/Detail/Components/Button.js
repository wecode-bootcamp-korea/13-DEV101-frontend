import React from "react";
import styled from "styled-components";

const Button = ({
  onClick,
  children,
  subText,
  bgcolor,
  color,
  width,
  weight,
}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      bgcolor={bgcolor}
      color={color}
      width={width}
      weight={weight}
    >
      <span>{children}</span>
      <p>{subText}</p>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  ${({ theme }) => theme.flexCenters}
  background: ${(props) => props.bgcolor || "black"};
  color: ${(props) => props.color || "white"};
  width: ${(props) => props.width || "100%"};
  padding: 15px;
  border-radius: ${({ theme }) => theme.radius.small};
  font-weight: ${(props) => props.weight || "600"};
  text-align: center;
  cursor: pointer;
  span {
    padding: 0 5px;
  }
  p {
    font-size: 11px;
    font-weight: 400;
  }
`;

export default Button;
