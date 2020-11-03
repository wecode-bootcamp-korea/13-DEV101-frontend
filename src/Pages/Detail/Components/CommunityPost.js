import React, { useState, useRef } from "react";
import styled from "styled-components";
import CommunityComment from "./CommunityComment";
import axios from "axios";
import { Hr } from "./Utils";
import { AiOutlinePlus, AiOutlineSend } from "react-icons/ai";
import { APIPOST } from "./Utils";

const CommunityPost = ({ img, nickname, date, children, comments }) => {
  const fileRef = useRef();
  const [currentFile, setCurrentFile] = useState([]);
  const [currentComment, setCurrentComment] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fileHandler = (e) => {
    setCurrentFile(e.target.files);
  };

  const fileUpload = () => {
    fileRef.current.click();
  };

  const HandleComment = (e) => {
    setCurrentComment(e.target.value);
  };

  const PostCommnet = () => {
    const formData = new FormData();
    formData.append("user_id", 1);
    formData.append("file", currentFile[0], currentFile[0].name);
    formData.append("content", currentComment);
    axios
      .post(APIPOST, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setImageUrl(res.data.image_url);
      })
      .then(() => {
        setCurrentFile([]);
        setCurrentComment("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CommunityPostWrap>
      <Hr margin="32px 0" />
      <div className="question">
        <div>
          <img
            src={
              img
                ? img
                : "https://ssl.pstatic.net/static/pwe/address/img_profile.png"
            }
            alt=""
          />
          <div>
            <h4>{nickname}</h4>
            <p>{date}</p>
          </div>
        </div>
        <span>{children}</span>
      </div>
      {comments?.map(({ profile_image, nickname, date, description }, i) => (
        <CommunityComment
          key={i}
          img={profile_image}
          nickname={nickname}
          date={date}
        >
          {description}
        </CommunityComment>
      ))}
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <form className="postInput" encType="multipart/form-data">
        <input
          type="file"
          onChange={fileHandler}
          accept="image/*"
          className="hidden"
          ref={fileRef}
        />
        <div onClick={fileUpload} className="plusBtn">
          <AiOutlinePlus size={22} />
        </div>
        <div>
          <img src={currentFile} alt="" />
        </div>
        <input
          type="text"
          value={currentComment}
          onChange={HandleComment}
          placeholder="댓글을 입력해주세요."
        />
        <div onClick={PostCommnet} className="postBtn">
          <AiOutlineSend size={22} />
        </div>
      </form>
    </CommunityPostWrap>
  );
};

export default CommunityPost;

const CommunityPostWrap = styled.div`
  .question {
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }
      > div {
        display: flex;
        padding-left: 10px;
        flex-direction: column;
        justify-content: center;
        h4 {
          font-size: 11px;
          font-weight: 600;
        }
        p {
          font-size: 10px;
          color: gray;
          padding: 3px 0;
        }
      }
    }
    span {
      font-size: 14px;
      line-height: 18px;
    }
  }
  .postInput {
    .hidden {
      display: none;
    }
    display: flex;
    margin: 18px 0;
    border-radius: 25px;
    border: 1px solid #cdd1d4;
    .plusBtn {
      ${({ theme }) => theme.flexCenters};
      color: #cdd1d4;
      background: ${({ theme }) => theme.colors.softGray};
      padding: 5px;
      margin: 8px;
      border-radius: 50%;
      cursor: pointer;
    }
    input {
      display: flex;
      margin: 13px 0;
      font-size: 15px;
      font-weight: 300;
      flex: 1;
      outline: none;
      border: none;
    }
    .postBtn {
      ${({ theme }) => theme.flexCenters}
      color: #cdd1d4;
      padding: 5px;
      margin: 8px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
