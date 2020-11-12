import React, { useEffect } from "react";
import Styled from "styled-components";
import { getInfomation } from "../../../store/CreatorsReducer";
import { useDispatch, useSelector } from "react-redux";

const SUB_CATEGORY = [
  ["미술", "요리/음료"],
  ["데이터/개발", "글쓰기/콘텐츠"],
  ["SNS/콘텐츠", "마인드/자기계발", "부동산/주식/재테크", "온라인쇼핑몰", "창업"],
];

const Intro = () => {
  const dispatch = useDispatch();
  const { brand, category, subCategory, level, creatorName } = useSelector(
    (state) => state.CreatorsReducer.infomation,
  );

  const handleInfomation = (e) => {
    dispatch(
      getInfomation({
        [e.target.name]: e.target.value,
      }),
    );
  };

  useEffect(() => {}, [category]);
  return (
    <Wrap>
      <h3>간단하게 어떤 클래스인지 알려주세요</h3>
      <p>
        {`언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요? 간단히 크리에이터님이 알려줄 수 있는 카테고리를 설정해봐요. 모든 수정 사항은 즉시 저장되니 안심해 주세요.`}
      </p>
      <div>
        <label>크리에이터 이름</label>
        <input
          value={creatorName}
          maxlength={12}
          name="creatorName"
          onChange={handleInfomation}
          type="text"
        />
      </div>
      <div className="brand">
        <label>브랜드</label>
        <select name="brand" onChange={handleInfomation} value={brand}>
          <option value={0}>크리에이티브(미술, 음악, 요리 등 취미 클래스를 만들고 싶어요)</option>
          <option value={1}>
            커리어(직무, 창업, 자기계발 등 커리어 향상을 위한 클래스를 만들고 싶어요)
          </option>
          <option value={2}>
            머니(부업, 창업, 재태크 등 수익 활동에 대한 클래스를 만들고 싶어요)
          </option>
        </select>
      </div>
      <div className="category">
        <label>카테고리</label>
        <select name="category" onChange={handleInfomation} value={category}>
          {SUB_CATEGORY[brand].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="subCagetory">
        <label>세부 카테고리</label>
        <input
          value={subCategory}
          maxlength={12}
          name="subCategory"
          onChange={handleInfomation}
          type="text"
        />
        <p>{subCategory.length}자 / 최대 12자</p>
      </div>
      <div className="level">
        <label>난이도</label>
        <select name="level" value={level} onChange={handleInfomation}>
          <option>입문자</option>
          <option>초급자</option>
          <option>중급자</option>
          <option>준전문가</option>
          <option>전문가</option>
        </select>
      </div>
    </Wrap>
  );
};

export default Intro;

const Wrap = Styled.div`
  width: 100%;
    h3 {
      font-size: 24px;
      font-weight: 600;
      padding: 20px 0;
    }
    > p {
      font-size: 14px;
      line-height: 18px;
      text-align: left;
      white-space: pre-wrap;
      color: #858a5d;
      margin-bottom: 32px;
    }

    .subCagetory {
      input {
      margin-bottom: 0;
      }
      p {
        font-size: 12px;
        color: gray;
        margin-top: 5px;
        margin-bottom: 22px;
      }
    }
`;
