import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import ClassCard from "../../Components/ClassCard";
import MordalPortal from "./SearchPageComponent/MordalPortal";
import FilterBtnModal from "./SearchPageComponent/FilterBtnModal";
import SearchBanner from "./SearchPageComponent/SearchBanner";
import InfiniteScroll from "../../Components/InfiniteScroll";
import { JHAPI } from "../../config";

const SearchPage = () => {
  const [searchResultCard, setSearchResultCard] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [btnName, setBtnName] = useState("카테고리");
  const [category, setCategory] = useState("카테고리");
  const [sortBtnChecked, setSortBtnChecked] = useState("");
  const [sortQuery, setSortQuery] = useState("updated");
  const [infiniteData, setInfiniteData] = useState([]);
  const [newFetchedData, setNewFetchedData] = useState([]);
  let fetchCount = 0;

  const sortQueryFunction = (value) => {
    setSortBtnChecked(value);
    handleCloseModal();
    if (value === "최신순") {
      setSortQuery("updated");
    }
    if (value === "만족도순") {
      setSortQuery("satisfaction");
    }
    if (value === "인기순") {
      setSortQuery("popular");
    }
  };

  const handleOpenModal = (e) => {
    setBtnName(e.target.name);
    setModalVisible(!modalVisible);
  };

  const handleCloseModal = (e) => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    intersection();
  }, []);

  const searchQuery = window.location.search;

  useEffect(() => {
    fetch(
      `${JHAPI}/search${searchQuery ? `${searchQuery}?` : "?"}${
        category !== "카테고리" ? `&category=${category}` : ""
      }${sortQuery ? `&sort=${sortQuery}` : ""}&offset=0&limit=7`,
    )
      .then((res) => res.json())
      .then((result) => setSearchResultCard(result.data));
  }, [category, sortQuery]);

  useEffect(() => {
    modalVisible && (document.body.style.overflow = "hidden");
    !modalVisible && (document.body.style.overflow = "unset");
  }, [modalVisible]);

  const getBtnVal = (checkedVal) => {
    setCategory(checkedVal);
  };

  useEffect(() => {
    const mergedData = [...infiniteData, ...newFetchedData];
    setInfiniteData(mergedData);
  }, [newFetchedData]);

  const fetchData = () => {
    fetchCount++;
    axios
      .get(
        `${JHAPI}/search${searchQuery ? searchQuery : "?"}${
          category !== "카테고리" ? `&category=${category}` : ""
        }${sortQuery ? `&sort=${sortQuery}` : ""}&offset=${16 * fetchCount + 7}&limit=16`,
      )
      .then((res) => {
        setNewFetchedData(res.data.data);
      });
  };

  const intersection = () => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    let callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("hr");
          if (entry.intersectionRatio >= 0.75) {
            fetchData();
          }
        }
      });
    };
    let target = document.querySelector(".observer");
    let observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  };

  return (
    <SearchPageWrapper>
      <h3>검색 결과</h3>
      <FilterContainer>
        <button onClick={handleOpenModal} name="카테고리">
          {category ? <p>{category}</p> : <p>카테고리</p>}
          <IoIosArrowDown size={17} className="btnIcon" />
        </button>
        <button onClick={handleOpenModal} name="필터">
          {sortBtnChecked ? <p>{sortBtnChecked}</p> : <p>필터</p>}
          <IoIosArrowDown size={17} className="btnIcon" />
        </button>
      </FilterContainer>
      <ClassResultContainer>
        {searchResultCard.slice(0, 7).map((searchData, idx) => {
          return (
            <div>
              <ClassCard key={idx} {...searchData} cardWidth={276} />
            </div>
          );
        })}
        <MoreClass>
          <h4>찾으시는 클래스가 없으신가요?</h4>
          <p>여러분이 만나고 싶은 크리에이터를 알려주세요.</p>
          <div>
            <BsArrowRightShort size={28} color={"white"} />
          </div>
        </MoreClass>
        <BannerContainer>
          <SearchBanner />
        </BannerContainer>
        {searchResultCard.slice(7).map((searchData, idx) => {
          return (
            <div>
              <ClassCard {...searchData} cardWidth={276} />
            </div>
          );
        })}
      </ClassResultContainer>
      <InfiniteScroll dataList={infiniteData} />
      <div className="observer"></div>
      <MordalPortal>
        <FilterBtnModal
          modalVisible={modalVisible}
          modalEventHandler={handleCloseModal}
          btnName={btnName}
          category={category}
          getBtnVal={getBtnVal}
          getSortBtnVal={sortQueryFunction}
        />
      </MordalPortal>
    </SearchPageWrapper>
  );
};

export default SearchPage;

const SearchPageWrapper = styled.section`
  width: 1176px;
  margin: 0 auto;
  margin-top: 68px;
  padding: 32px 0;
  color: #1b1c1d;
  position: relative;

  .observer {
    position: absolute;
    bottom: 300px;
  }

  h3 {
    color: #1b1c1d;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    letter-spacing: 0.4px;
    margin-bottom: 24px;
  }
`;
const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;

  button > * {
    pointer-events: none;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 14px;
    padding: 10px 16px;
    background-color: #f8f8f9;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 7px;

    .btnIcon {
      margin-top: 3px;
      margin-left: 2px;
    }

    p {
      margin-right: 3.8px;
    }
  }
`;

const ClassResultContainer = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 34px 22px;
`;

const MoreClass = styled.section`
  padding: 27px 24px;
  width: 276px;
  background-color: rgb(248, 248, 249);
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  h4 {
    font-size: 18px;
    font-weight: bold;
    word-break: keep-all;
    margin-bottom: 14px;
  }

  p {
    word-break: keep-all;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;
  }

  div {
    width: 40px;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 77, 0);
    border-radius: 100%;
    position: absolute;
    bottom: 7%;
    right: 6%;
  }
`;

const BannerContainer = styled.section`
  display: grid;
  grid-column: 1 / 5;
  grid-row: 3;
  height: 150px;
  margin-bottom: 11px;
`;
