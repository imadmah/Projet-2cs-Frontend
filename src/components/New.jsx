import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiChevronRight } from "react-icons/bi";
import Card from "./Card";
import LongCard from "./LongCard";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/news")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  if (news.length === 0) {
    return (
      <div className="h-[calc(100vh-92px)] my-32">
        <div className="flex flex-col w-fit items-center ml-8 mb-8 lg:items-start">
          <div className="h-4 w-full lg:w-24 bg-main-blue" />
          <h1 className="text-greytitle text-5xl text-center font-bold">
            News & Events
          </h1>
        </div>
        <h2 className="text-5xl text-center text-main-blue font-bold py-3">
          News
        </h2>
        <div className="flex justify-center items-center h-full">
          <p className="text-center text-slate-700 text-base font-bold">
            No news available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-92px)] my-32">
      <div className="flex flex-col w-fit items-center ml-8 mb-8 lg:items-start">
        <div className="h-4 w-full lg:w-24 bg-main-blue" />
        <h1 className="text-greytitle text-5xl text-center font-bold">
          News & Events
        </h1>
      </div>
      <h2 className="text-5xl text-center text-main-blue font-bold py-3">
        News
      </h2>
      <div className="flex flex-col mb-8 gap-4 justify-center content-center">
        {news.slice(0, 3).map((item, index) => {
          if (index === 0) {
            return (
              <div className="flex flex-row justify-center gap-4" key={index}>
                <LongCard text={item.title} image={item.image} />
                {news.slice(1, 3).map((subItem, subIndex) => (
                  <Card
                    text={subItem.title}
                    image={subItem.image}
                    key={subIndex}
                  />
                ))}
              </div>
            );
          }
          if (index === 1) {
            return (
              <div className="flex flex-row justify-center gap-4" key={index}>
                {news.slice(2, 4).map((subItem, subIndex) => (
                  <Card
                    text={subItem.title}
                    image={subItem.image}
                    key={subIndex}
                  />
                ))}
                <LongCard
                  text={news[5] ? news[5].title : ""}
                  image={news[5] ? news[5].image : ""}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex justify-center">
        <a href="/News">
          <button className="flex items-center gap-x-4 px-16 py-2 font-medium text-white bg-main-blue group">
            <span>See More</span>
            <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default News;
