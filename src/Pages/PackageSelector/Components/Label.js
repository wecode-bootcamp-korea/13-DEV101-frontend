import React from "react";
import Styled from "styled-components";

const Label = ({ children, ...stylesProps }) => {
  return <LabelWrap {...stylesProps}>{children}</LabelWrap>;
};

export const RecommendLabel = () => {
  return <Label bgcolor="#ff922b">추천</Label>;
};

export default Label;

const LabelWrap = Styled.div`
  display: inline-block;
  padding: 5px;
  border-radius: ${({ theme }) => theme.radius.small};
  font-size: 9px;
  font-weight: 700;
  background: ${({ bgcolor }) => bgcolor || "black"};
  color: ${({ color }) => color || "white"};
`;
