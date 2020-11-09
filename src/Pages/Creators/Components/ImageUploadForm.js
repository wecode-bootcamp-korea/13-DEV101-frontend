import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoImages } from "../../../store/CreatorsReducer";
import Styled from "styled-components";

const ImageUploadForm = ({ idx, handleInfoImg, handleInfoDesc }) => {
  const ImgRef = useRef();
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const { infoImages } = useSelector((state) => state.CreatorsReducer);
  const fileHandler = (e) => {
    let result = {};
    let reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result;
      if (base64) {
        result = { ...result, src: base64.toString() };
        dispatch(
          getInfoImages({
            [idx]: result,
          }),
        );
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      handleInfoImg(idx, e.target.files[0]);
    }
  };

  const handlePreview = () => {
    ImgRef.current.click();
  };

  const handleDescription = (e) => {
    handleInfoDesc(idx, e.target.value);
  };

  const closeBtn = () => {
    dispatch(getInfoImages({ [idx]: {} }));
    setDescription("");
  };

  return (
    <Wrap>
      <div onClick={handlePreview}>
        <div data-name="cover" onClick={closeBtn} className="closeBtn">
          X
        </div>
        {infoImages[idx] ? (
          <img src={infoImages[idx].src} alt="" />
        ) : (
          <div>
            <span>클래스 주제에 대한 사진, 영상</span>
            <p>권장 비율 - 3:4(세로형)</p>
            <p>권장 사이즈 - 1200 * 1600</p>
          </div>
        )}
      </div>
      <textarea
        onChange={handleDescription}
        vlaue={description}
        placeholder="사진, 영상에 대한 설명을 적어주세요"
      ></textarea>
      <input onChange={fileHandler} className="hidden" ref={ImgRef} type="file" />
    </Wrap>
  );
};

export default ImageUploadForm;

const Wrap = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: gray;
  cursor: pointer;
  > div {
  position: relative;
  border: 1px solid gray;
  text-align: center;
  min-height: 250px;
  padding: 20px;
  ${({ theme }) => theme.flexcenterXY};
  margin-bottom: 10px;
  > span {
    font-size: 14px;
  }
  > p {
    font-size: 12px;
  }
  > img {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  }
  textarea {
    font-size: 14px;
  }
  .hidden {
    display: none;
  }
  .closeBtn {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 24px;
   height: 24px;
   border: 3px solid white;
   border-radius: 50%;
   background: black;
   color: white;
   z-index: 10;
   position: absolute;
   margin-top: 5px;
   top:0;
   right: 0;
 }
`;
