const Card = (props) => {
  return (
    <div>
      <div className="w-64 h-86    shadow-xl   ">
        <img className=" shadow z-10" src={`/images/${props.image}`} />
        <div className="p-2  text-black text-xl font-bold font-sans ">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default Card;
