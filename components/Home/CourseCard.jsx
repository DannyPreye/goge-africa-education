const CourseCard = ({ type }) => {
  return (
    <div className="max-w-[303px] h-[279px] relative bg-gray round-[10px]">
      <div className=" text-[14px] font-[700] text-pink w-[88px] h-[33px] grid place-items-center bg-gradient-to-r from-dark to-yellow rounded-bl-full absolute top-0 right-0">
        {type}
      </div>
      <div className="w-full h-[73px] bg-gradient-to-r from-dark to-yellow"></div>
    </div>
  );
};
export default CourseCard;
