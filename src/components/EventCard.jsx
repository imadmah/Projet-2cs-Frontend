// eslint-disable-next-line react/prop-types
function EventCard({ Image, Title, Description }) {
  return (
    <div className="h-[420px] w-[320px]  bg-white shadow-xl">
      <div className="flex  items-center justify-center">
        {/* <img className="w-full object-cover" src={`/images/${Image}`} /> */}
        <img
          className=" w-full h-[260px] object-cover"
          src={`/images/${Image}`}
        />
      </div>
      <div className="max-h-1/2  py-4 px-4">
        <p className="text-main-blue text-xl mb-2 text-center font-bold">
          {Title}
        </p>
        <p className="text-black opacity-80 text-xs font-bold ">
          {Description}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
