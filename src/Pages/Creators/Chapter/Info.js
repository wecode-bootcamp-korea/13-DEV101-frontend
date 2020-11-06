import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Styled from "styled-components";
import ImageUploadFrom from "../Components/ImageUploadForm";

const Info = ({ handleInfoImg, handleInfoDesc }) => {
  return (
    <Wrap>
      <ImageUploadFrom handleInfoDesc={handleInfoDesc} handleInfoImg={handleInfoImg} idx={0} />
      <ImageUploadFrom handleInfoDesc={handleInfoDesc} handleInfoImg={handleInfoImg} idx={1} />
      <ImageUploadFrom handleInfoDesc={handleInfoDesc} handleInfoImg={handleInfoImg} idx={2} />
    </Wrap>
  );
};

export default Info;

const Wrap = Styled.div`
display: flex;
flex-flow: wrap;
`;
