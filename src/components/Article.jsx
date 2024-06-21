import React from 'react'

function Article({ReadTime,Date,Image,Link,Subtitle,Title,Writer}) {
  return (
    <div className="flex items-start p-4 gap-10 justify-center">
        <div className="ml-4 flex-1">
            <a href={Link} className="text-black text-base font-bold py-3 line-clamp-3">
                {Title} 
            </a>
            <div className="text-sm text-gray-500 mt-1">{Subtitle}</div>
            <p className="text-black opacity-80 text-xs font-bold py-2">
                Written by: {Writer}
            </p>
            <p className="text-black opacity-80 text-xs font-bold">
                In: {Date}
            </p>
            <div className="text-sm text-gray-500 mt-1">{ReadTime} min read</div>
        </div>
    <img src={`/images/${Image}`} className="w-[230px] object-contain" />
    </div>
  )
}

export default Article