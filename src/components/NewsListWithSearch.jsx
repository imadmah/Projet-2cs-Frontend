import React, { useState, useEffect } from "react";
import axios from "axios";
import formatDate from "../utils/formatDate";
import Article from "./Article";

function ArticleListWithSearch() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [executeSearchQuery, setExecuteSearchQuery] = useState("");

  useEffect(() => {
    fetchArticles();
  }, [executeSearchQuery]);

  const fetchArticles = () => {
    const url = searchQuery
      ? `http://localhost:8800/articles/search?q=${executeSearchQuery}`
      : "http://localhost:8800/articles";

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setExecuteSearchQuery(searchQuery);
  };

  return (
    <div className=" w-8/12 mx-auto mt-8 px-4">
      <form
        onSubmit={handleSearchSubmit}
        className="flex justify-center mb-6 w-2/3 border-2 rounded-2xl outline-none border-main-blue mx-auto bg-white"
      >
        <input
          type="text"
          placeholder="Rechercher un article par nom, auteur..."
          className="py-3 px-5 outline-none w-full rounded-full"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">
          <img src="/images/Outline.svg" className="py-2 pr-5" alt="Search" />
        </button>
      </form>
      <div className="flex flex-col gap-10">
        {articles.map((article) => (
          <Article
            key={article.article_id}
            ReadTime={article.avg_time}
            Date={formatDate(article.date)}
            Image={article.image}
            Link={article.link}
            Subtitle={article.subtitle}
            Title={article.title}
            Writer={article.writer}
          />
        ))}
      </div>
    </div>
  );
}

export default ArticleListWithSearch;
