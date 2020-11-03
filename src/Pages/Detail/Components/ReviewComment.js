import React from "react";
import styled from "styled-components";

const ReviewComment = ({ img, nickname, date, children }) => {
  return (
    <ReviewCommentWrap
      img={img}
      nickname={nickname}
      date={date}
      children={children}
    >
      <div>
        <div className="profileImage">
          <img
            src={
              img
                ? img
                : "https://ssl.pstatic.net/static/pwe/address/img_profile.png"
            }
            alt=""
          />
        </div>
        <div className="profileInfo">
          <span className="nickname">{nickname}</span>
          <p>{date}</p>
        </div>
      </div>
      <span className="contents">{children}</span>
    </ReviewCommentWrap>
  );
};

export default ReviewComment;

const ReviewCommentWrap = styled.div`
  margin-bottom: 10px;
  > div {
    display: flex;
    align-items: center;
    .profileImage {
      img {
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    .profileInfo {
      display: flex;
      flex-direction: column;
      .nickname {
        font-size: 11px;
        font-weight: 600;
      }
      p {
        color: gray;
        font-size: 9px;
        padding: 4px 0;
      }
    }
  }
  .contents {
    display: flex;
    flex: 1;
    padding: 6px 0;
    line-height: 19px;
    font-size: 14px;
  }
`;
