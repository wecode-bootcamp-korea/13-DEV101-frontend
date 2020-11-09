import React from "react";
import styled from "styled-components";
import { ProfileImages } from "./Utils";

const CommunityComment = ({ img, profile_image, nickname, date, children }) => {
  return (
    <CommunityCommentWrap>
      <div>
        <ProfileImages img={img} />
        <div>
          <h4>{nickname}</h4>
          <p>{date}</p>
        </div>
      </div>
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

    img {
      border-radius: 50%;
      width: 23px;
      height: 23px;
    }

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

  span {
    padding-left: 34px;
    font-size: 14px;
    line-height: 18px;
  }
`;
