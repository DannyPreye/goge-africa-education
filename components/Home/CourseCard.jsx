const CourseCard = ({ type, topic }) => {
  return (
    <div className='max-w-[303px] h-[279px] relative bg-[#C4C4C4] rounded-[10px] overflow-hidden'>
      <div className=' text-[14px] font-[700] text-pink w-[88px] h-[33px] grid place-items-center bg-gradient-to-r from-dark to-yellow rounded-bl-[20px] absolute top-0 right-0'>
        {type}
      </div>
      <div className='w-full h-[73px] bg-gradient-to-r from-dark to-yellow absolute bottom-0 grid place-items-center'>
        <div className='w-[80%]'>
          <p className='text-[14px] w-[144px] font-[700] text-pink'>{topic}</p>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
