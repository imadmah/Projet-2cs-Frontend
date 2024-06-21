import React from 'react'

function MostViewedArticleCard({author,title,date,readTime,Link}) {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col">
            <a href={Link} className="text-black text-base font-bold py-3 line-clamp-3">
                {title}
            </a>
            <p className="text-black opacity-80 text-xs font-bold pb-1">
                Written by: {author}
            </p>
            <p className="text-black opacity-80 text-xs font-bold pb-3">
                In: {date}
            </p>
            <div className="mt-auto text-sm text-gray-500">{readTime} min read</div>
        </div>
    )
}

export default MostViewedArticleCard