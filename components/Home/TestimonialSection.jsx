import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { testimonial } from '../../test/test';
import Image from 'next/image';

const TestimonialSection = () => {
  const [slideActiv, setSlideActive] = useState(false);
  return (
    <section className='w-screen  bg-pink'>
      <div className='container mx-auto'>
        <div className='grid place-items-center w-[78%] mx-auto'>
          <h2 className='font-[800] text-center mt-[90px] text-[40px] bg-clip-text text-transparent  bg-gradient-to-r from-dark to-yellow'>
            What Students Say
          </h2>
          <p className=' text-[14px] mt-[80px] text-center'>
            Semaj Africa is an online education platform that delivers video
            courses, programs and resources for Individual, Advertising & Media
            Specialist, Semaj Africa is an online education platform that
            delivers video courses, programs and resources for Individual,
            Advertising & Media Specialist,.
          </p>
        </div>
        <div className='mt-[66px]'>
          <Splide
            options={{
              perPage: 4,
              arrows: false,
              gap: '20px',
              width: 'fit-content',
              autoWidth: true,
              pagination: false,
              perMove: 1,
              focus: 'center',
              type: 'loop',
              drag: 'free',
            }}
          >
            {testimonial.map((item, index) => (
              <SplideSlide key={index} id={index}>
                <TestimonialCard
                  content={item.content}
                  category={item.category}
                  name={item.name}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className='w-full grid place-items-center mt-[97px]'>
          {' '}
          <Image
            src='/icons/Loader.svg'
            width='160'
            height='7'
            alt='loader icon'
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
