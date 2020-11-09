import React, { useState, useRef } from "react";
import Styled from "styled-components";
import axios from "axios";
import { AiOutlinePlus, AiOutlineSend } from "react-icons/ai";
import CommunityComment from "./CommunityComment";
import { Hr, APIPOST, ProfileImages } from "./Utils";

const CommunityPost = ({ img, nickname, date, children, comments }) => {
  const fileRef = useRef();
  const [currentFile, setCurrentFile] = useState(null);
  const [currentComment, setCurrentComment] = useState("");
  const [imgBase64, setImgBase64] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fileHandler = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setCurrentFile(e.target.files[0]);
    }
  };

  const fileUpload = () => {
    fileRef.current.click();
  };

  const handleImageRemove = () => {
    setImgBase64("");
    setCurrentFile(null);
  };

  const HandleComment = (e) => {
    setCurrentComment(e.target.value);
  };

  const PostCommnet = async () => {
    const formData = new FormData();
    formData.append("user_id", 1);
    formData.append("file", currentFile, currentFile.name);
    formData.append("content", currentComment);
    try {
      const res = await axios.post(APIPOST, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImageUrl(res.data.image_url);
      setCurrentFile([]);
      setCurrentComment("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CommunityPostWrap>
      <Hr margin="32px 0" />
      <div className="question">
        <div>
          <ProfileImages img={img} />
          <div>
            <h4>{nickname}</h4>
            <p>{date}</p>
          </div>
        </div>
        <span>{children}</span>
      </div>
      {comments?.map((comment, idx) => (
        <CommunityComment
          key={idx}
          img={comment.profile_image}
          nickname={comment.nickname}
          date={comment.date}
        >
          {comment.description}
        </CommunityComment>
      ))}
      {imgBase64 && (
        <ImagePreview>
          <div className="closePreview" onClick={handleImageRemove}>
            X
          </div>
          <img src={imgBase64} alt="imagePreview" />
        </ImagePreview>
      )}
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

const CommunityPostWrap = Styled.div`
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
      ${({ theme }) => theme.flexCenterXY};
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
      ${({ theme }) => theme.flexCenterXY}
      color: #cdd1d4;
      padding: 5px;
      margin: 8px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

const ImagePreview = Styled.div`
    display: flex;
    position: relative;
    background: ${({ theme }) => theme.colors.deepGray};
    margin: 10px 0;
    padding: 5px;
    width: 140px;
    border-radius: ${({ theme }) => theme.radius.small};
    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      z-index: -1;
      background: ${({ theme }) => theme.colors.deepGray};
      bottom: -1px;
      left: 15%;
      transform: rotate(-45deg) translateX(-50%);
    }

    .closePreview {
      position: absolute;
      top: 0;
      right: 0;
      color: black;
      font-weight: bold;
      padding: 2px;
      cursor: pointer;
      background: ${({ theme }) => theme.colors.deepGray};
      border-radius: 50%;
    }

    img {
      width: 100%;
      object-fit: cover;
    }

`;
