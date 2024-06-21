import React, { useState, useEffect } from "react";
import axios from "axios";
import MostViewedArticleCard from "./MostViewedArticleCard";
import formatDate from "../utils/formatDate";

function MostViewedArticlesSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8800/articles/most-viewed-articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className='flex items-center h-full gap-2 mb-4'>
        <img src="/images/most-viewed.png" alt="" className='w-5 h-5' />
        <h1 className="text-2xl font-medium text-[#242424]">Most viewed</h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {articles.map(article => (
          <MostViewedArticleCard 
            key={article.id} 
            author={article.writer} 
            title={article.title} 
            date={formatDate(article.date)} 
            readTime={article.avg_time} 
            Link={article.link}
          />
        ))}
      </div>
    </div>
  );
}

export default MostViewedArticlesSection;
