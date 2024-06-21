/* eslint-disable react/prop-types */
import React from "react";
import ArticleCard from "./ArticleCard";
import { BiChevronRight } from "react-icons/bi";
import formatDate from "../utils/formatDate.js";
import { Link } from "react-router-dom";

function ArticlesSection({ articles }) {
  return (
    <div className="w-full h-[calc(100vh-92px)] bg-[#F6FAFF]">
      <h1 className="text-5xl text-center text-main-blue font-bold py-3">
        Articles
      </h1>
      <div className="flex items-center justify-center gap-9">
        {articles.map((item, index) => (
          <ArticleCard
            key={index}
            Link={item.link}
            Image={item.image}
            Title={item.title}
            Writer={item.writer}
            Date={formatDate(item.date)}
          />
        ))}
      </div>
      <a href="/articles" className="flex justify-center mt-7">
        <button className="flex items-center gap-x-4 px-10 py-2 font-medium text-white bg-blue-600 group">
          <span>View More</span>
          <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
        </button>
      </a>
    </div>
  );
}

export default ArticlesSection;
