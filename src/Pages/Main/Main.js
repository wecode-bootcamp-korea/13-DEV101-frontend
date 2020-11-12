import { useState, useEffect } from "react";
import axios from "axios";
import SliderComponent from "../../Components/SliderComponent";
import MainSlider from "./components/MainSlider";
import InfiniteScroll from "../../Components/InfiniteScroll";
import styled from "styled-components";
import SubBanner from "./components/SubBanner";

const Main = () => {
  const [top10, setTop10] = useState([]);
  const [planned, setPlanned] = useState([]);
  const [updated, setUpdated] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  let fetchCount = 0;

  useEffect(() => {
    axios
      .get(`http://10.58.1.45:8000/products?offset=0&limit=16`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        setTop10(data.top_10_data);
        setPlanned(data.planned_data);
        setUpdated(data.updated_data);
      });
    intersection();
  }, []);

  useEffect(() => {
    const mergedData = [...updated, ...fetchedData];
    setUpdated(mergedData);
  }, [fetchedData]);

  const fetchData = async () => {
    fetchCount++;
    axios
      .get(`http://10.58.1.45:8000/products?offset=${16 * fetchCount}&limit=16`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setFetchedData(res.data.updated_data);
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
    <MainSection>
      <MainSlider />
      <PageWrapper>
        <div>
          <h3>지금, 인기 TOP 10</h3>
          <SliderComponent dataList={top10} />
          <h3>오픈 예정 클래스</h3>
          <SliderComponent dataList={planned} />
          <SubBanner />
          <h3>최근 업데이트 클래스</h3>
          <InfiniteScroll dataList={updated} />
          <div className="observer"></div>
        </div>
      </PageWrapper>
    </MainSection>
  );
};

const MainSection = styled.section`
  overflow: hidden;
  .observer {
    position: absolute;
    bottom: 300px;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;

  > div {
    width: ${(props) => props.theme.contentWrapperWidth};
    position: relative;
    h3 {
      font-weight: 700;
      font-size: 26px;
      margin-bottom: 20px;
    }
  }
`;

export default Main;
