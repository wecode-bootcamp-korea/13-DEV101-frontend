import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Button from "./Button";
import CommunityPost from "./CommunityPost";
import CreateMessage from "./CreatorMessage";

const Community = ({ focusTarget }) => {
  const [more, setMore] = useState(false);
  const [communitys, setCommunitys] = useState([]);
  const { community } = useSelector((state) => state.DetailReducer);

  const getComment = () => {
    setCommunitys(community);
    setMore(true);
  };

  useEffect(() => {
    setCommunitys(community.slice(0, 5));
  }, [community]);

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
      {communitys?.map((post, idx) => (
        <CommunityPost
          key={idx}
          post_id={post.post_id}
          img={post.profile_image}
          comments={post.comments}
          nickname={post.nickname}
          date={post.date}
        >
          {post.description}
        </CommunityPost>
      ))}
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
