import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Hr } from "./Utils";
import ReviewComment from "./ReviewComment";

const Review = () => {
  const { reviews } = useSelector((store) => store.DetailReducer);

  return (
    <ReviewWrap>
      <h2>
        실제 수강생들의 <br /> 생생한 후기
      </h2>
      <span>
        <div>
          <h5>클래스 후기</h5> <h3>{reviews?.review_length}</h3>
        </div>
        <div>
          <h5>클래스 만족도</h5> <h3>{Math.ceil(reviews?.satis)}%</h3>
        </div>
      </span>
      <div className="reviewList">
        <ul>
          {reviews.content?.map(({ description }, i) => (
            <li key={i}>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
      <Hr margin="32px 0" />
      <div className="commentList">
        {reviews.comment_list?.map(({ id, profile_image, nickname, date, description }, i) => (
          <ReviewComment key={i} img={profile_image} nickname={nickname} date={date}>
            {description}
          </ReviewComment>
        ))}
      </div>
      <Hr margin="32px 0" />
    </ReviewWrap>
  );
};

export default Review;

const ReviewWrap = styled.div`
  h2 {
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
  }

  > span {
    display: flex;
    margin: 20px 0;

    > div {
      &:first-of-type {
        border-right: 1px solid #edeff0;
      }
      text-align: center;
      width: 50%;

      h5 {
        color: gray;
        font-weight: 600;
        font-size: 11px;
      }

      h3 {
        font-size: 30px;
        font-weight: 800;
        padding: 10px 0;
      }
    }
  }

  .reviewList {
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        font-size: 14px;
        ${({ theme }) => theme.flexCenterXY}
        text-align: center;
        padding: 10px;
        width: 24%;
        min-height: 170px;
        max-height: 190px;
        margin: 3px;
        background: ${({ theme }) => theme.colors.softGray};
      }
    }
  }

  @media ${({ theme }) => theme.tabletS} {
    .reviewList {
      ul {
        justify-content: center;

        li {
          width: 30%;
        }
      }
    }
  }
`;
