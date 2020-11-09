import React from "react";
import styled from "styled-components";
import { ProfileImages } from "./Utils";

const CommunityComment = ({ img, contentImg, nickname, date, children }) => {
  return (
    <CommunityCommentWrap>
      <div>
        <ProfileImages img={img} />
        <div>
          <h4>{nickname}</h4>
          <p>{date}</p>
        </div>
      </div>
      {contentImg && (
        <div className="contentImage">
          <img src={contentImg} alt="commentImg" />
        </div>
      )}
      <span>{children}</span>
    </CommunityCommentWrap>
  );
};

export default CommunityComment;

const CommunityCommentWrap = styled.div`
  padding-top: 15px;

  > div {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      padding-left: 7px;
      align-items: center;

      h4 {
        font-size: 11px;
        font-weight: 600;
      }

      p {
        font-size: 11px;
        color: gray;
        padding: 0 4px;
      }
    }
  }
  .contentImage {
    display: flex;
    justify-content: center;
    margin: 0 30px;
    padding: 10px 0;
    padding-left: 24px;
    max-width: 400px;
    img {
      width: 100%;
    }
  }

  span {
    padding-left: 54px;
    font-size: 14px;
    line-height: 18px;
  }
`;
