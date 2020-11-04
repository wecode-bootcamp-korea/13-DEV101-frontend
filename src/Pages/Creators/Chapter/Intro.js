import React from "react";
import ContentsWrapper from "./components/ContentsWrapper";

const contents = (
  <>
    <h3>간단하게 어떤 클래스인지 알려주세요</h3>
    <p>
      언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요? 간단히 크리에이터님이 알려 줄 수 있는
      카테고리를 설정해봐요. 모든 수정 사항은 즉시 저장되니 안심해 주세요.
    </p>
    <label>브랜드</label>
    <select>
      <option>크리에이티브(미술, 음악, 요리 등 취미 클래스를 만들고 싶어요</option>
    </select>
  </>
);
const Intro = () => {
  return (
    <ContentsWrapper>
      <h3>간단하게 어떤 클래스인지 알려주세요</h3>
      <p>
        언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요? 간단히 크리에이터님이 알려 줄 수 있는
        카테고리를 설정해봐요. 모든 수정 사항은 즉시 저장되니 안심해 주세요.
      </p>
      <label>브랜드</label>
      <select>
        <option>크리에이티브(미술, 음악, 요리 등 취미 클래스를 만들고 싶어요</option>
      </select>
    </ContentsWrapper>
  );
};

export default Intro;
