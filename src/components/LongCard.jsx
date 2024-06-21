const LongCard = (props) => {
  return (
    <div className="relative w-1/3 h-86  shadow-xl   ">
      <img
        className="w-full h-full shadow-md z-10"
        src={`/images/${props.image}`}
        alt="bg_img"
      ></img>
      <div className=" absolute bottom-0 left-0  text-white m-4 text-2xl font-bold font-sans">
        {props.text}
      </div>
    </div>
  );
};

export default LongCard;
