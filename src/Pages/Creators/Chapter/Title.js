import React, { useState, useRef, useEffect } from "react";
import { getTitleAndCover } from "../../../store/CreatorsReducer";
import { useSelector, useDispatch } from "react-redux";
import Styled from "styled-components";

const Title = ({ handleCoverImg }) => {
  const dispatch = useDispatch();
  const coverImg = useRef();
  const thumbnailImg = useRef();
  const { cover, thumbnail, classTitle } = useSelector(
    (state) => state.CreatorsReducer.titleAndCover,
  );

  const handleInfomation = (e) => {
    dispatch(
      getTitleAndCover({
        [e.target.name]: e.target.value,
      }),
    );
  };

  const fileHandler = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        dispatch(
          getTitleAndCover({
            [e.target.name]: base64.toString(),
          }),
        );
      }
    };
    e.target.files[0] && reader.readAsDataURL(e.target.files[0]);
    handleCoverImg([e.target.name], e.target.files[0]);
  };

  const imgPreviewUpload = (item) => {
    item.current.click();
  };

  const closeBtn = (e) => {
    dispatch(
      getTitleAndCover({
        [e.target.dataset.name]: "",
      }),
    );
  };

  return (
    <Wrap>
      <div>
        <h3>클래스의 컨셉이 잘 드러난 제목과 이미지를 보여주세요</h3>
        <p>감성적이면서도 클래스를 잘 표현하는 제목과 이미지를 등록해주세요</p>
      </div>
      <div>
        <label>클래스 제목</label>
        <input
          name="classTitle"
          value={classTitle}
          onChange={handleInfomation}
          placeholder="컨셉이 잘 드러나는 클래스의 제목을 지어주세요."
          type="text"
        />
      </div>
      <div className="Images">
        <div className="coverContent">
          <div>
            <label>커버 이미지</label>
            <ImageWrap>
              <div className="imgs">
                <input name="cover" ref={coverImg} onChange={fileHandler} type="file" />
                {cover ? (
                  <>
                    <div data-name="cover" onClick={closeBtn} className="closeBtn">
                      X
                    </div>
                    <img name={cover} src={cover} onChange={handleInfomation} alt="cover" />
                  </>
                ) : (
                  <div onClick={() => imgPreviewUpload(coverImg)}>
                    <img src="./Images/dev101.png" alt="" />
                    <span>이미지를 첨부해주세요</span>
                    <p>9:16의 세로형 이미지를 추천합니다.</p>
                  </div>
                )}
              </div>
            </ImageWrap>
          </div>
        </div>
        <div className="thumbnailContent">
          <div>
            <label>썸네일 이미지</label>
            <ImageWrap>
              <div className="imgs">
                <input name="thumbnail" ref={thumbnailImg} onChange={fileHandler} type="file" />
                {thumbnail ? (
                  <>
                    <div data-name="thumbnail" onClick={closeBtn} className="closeBtn">
                      X
                    </div>
                    <img
                      name={thumbnail}
                      src={thumbnail}
                      onChange={handleInfomation}
                      alt="thumbnail"
                    />
                  </>
                ) : (
                  <div onClick={() => imgPreviewUpload(thumbnailImg)}>
                    <img src="./Images/dev101.png" alt="" />
                    <span>이미지를 첨부해주세요</span>
                    <p>9:16의 세로형 이미지를 추천합니다.</p>
                  </div>
                )}
              </div>
            </ImageWrap>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Title;

const Wrap = Styled.div`
  p {
    font-size: 14px;
    color: #cdd1d4;
    padding-bottom: 25px;
  }
  .Images {
    display: flex;
    
  }
.coverContent, .thumbnailContent {
  display: flex;
  margin-bottom: 30px;
  div:first-of-type{
    margin-right: 5px
  }
  div:last-of-type{
    input {
    }
  }
}
 div {

 }
`;

const ImageWrap = Styled.div`
    display: flex;
    border: 1px solid #cdd1d4;
    position: relative;
    flex: 0.5;
    width: 220px;
    height: 220px;
    cursor: pointer;
    color: #cdd1d4;
    flex-direction: column;
    > img {
      width: 100%;
      height: 100%;
    }
     > span {
       font-size: 14px;
     }
     & > p {
       font-size: 11px;
       padding: 5px;
     }
     .imgs {
    input {
      display: none;
    }
  img {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
