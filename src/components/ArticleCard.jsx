// eslint-disable-next-line react/prop-types
function ArticleCard({ Image, Title, Writer, Date,Link }) {
  return (
    <a href={Link} className="w-64 bg-white shadow-xl">
      <div className="flex items-center justify-center">
        <img
          className="w-full object-cover"
          src={`/images/${Image}`}
        />
      </div>
      <div>
        <p className="text-black text-base font-bold px-5 py-3 line-clamp-3 h-20">
          {Title}
        </p>
        <p className="text-black opacity-80 text-xs font-bold px-5 py-2 pb-1">
          Written by: {Writer}
        </p>
        <p className="text-black opacity-80 text-xs font-bold px-5 pb-3">
          In: {Date}
        </p>
      </div>
    </a>
  );
}

export default ArticleCard;
