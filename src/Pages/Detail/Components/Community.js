import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";
import CommunityPost from "./CommunityPost";
import CreateMessage from "./CreatorMessage";
import { API } from "./Utils";
const Community = ({ focusTarget }) => {
  const [more, setMore] = useState(false);
  const [community, setCommunity] = useState([]);

  const getComment = () => {
    axios.get(API).then((res) => setCommunity(res.data.community));
    setMore(true);
  };

  useEffect(() => {
    axios.get(API).then((res) => setCommunity(res.data.community.slice(0, 5)));
  }, []);

  return (
    <CommunityWrap>
      <div className="header" ref={(el) => (focusTarget.current[1] = el)}>
        <div className="title">
          <h2>커뮤니티</h2>
          <p>120개의 글</p>
        </div>
        <Button bgcolor="#3e4042" width="130px" weight="200">
          글 작성하기
        </Button>
      </div>
      <CreateMessage />
      {community?.map(
        ({ profile_image, nickname, date, description, comments }, i) => (
          <CommunityPost
            key={i}
            img={profile_image}
            comments={comments}
            nickname={nickname}
            date={date}
          >
            {description}
          </CommunityPost>
        ),
      )}
      {!more && (
        <Button bgcolor="#f8f8f9" color="black" onClick={getComment}>
          더보기
        </Button>
      )}
    </CommunityWrap>
  );
};

export default Community;

const CommunityWrap = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .title {
      align-items: center;
      display: flex;
      h2 {
        font-size: 25px;
        font-weight: 600;
      }
      p {
        padding: 0 8px;
        font-size: 14px;
        color: gray;
      }
    }
  }
`;
