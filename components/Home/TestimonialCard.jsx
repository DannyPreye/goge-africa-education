import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
const TestimonialCard = ({ content, name, category }) => {
  return (
    <div className='m-w-[373px] w-[100%] h-[343px] shadow-lg rounded-[5px] text-gray  bg-white grid place-items-center'>
      <div className='w-[80%]'>
        <ImQuotesLeft className='w-[34px] h-[26.31px] mt-[40px] ' />
        <p className='text-[14px] mt-[23.22px] max-w-[284px]'>{content}</p>
        <div className='flex gap-[11px] mt-10 items-center'>
          <div className='w-[53.33px] h-[53.33px] rounded-full bg-gray'></div>
          <div>
            <h4 className='text-[16px] font-[800]'>{name}</h4>
            <p className='text-[12px]'>Categoty: {category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
