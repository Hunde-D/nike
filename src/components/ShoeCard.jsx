const ShoeCard = ({ imgURL, changeMainImg, mainImg }) => {
  const handleClick = () => {
    if (mainImg !== imgURL.bigShoe) {
      changeMainImg(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        mainImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          className=" w-32 h-[105px] object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
