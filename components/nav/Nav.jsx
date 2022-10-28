import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineMenu } from 'react-icons/ai';
import { useInView } from 'framer-motion';

import Button from '../general/Button';
import NavLink from './NavLink';

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header
      className={`grid place-items-center py-[29px] bg-white sticky top-0 z-[10000] shadow-md px-2 `}
    >
      <div className='container relative '>
        <div className='flex  justify-between items-center'>
          <Link href={'/'}>
            <a className='cursor-pointer'>
              <Image src='/icons/Logo.svg' width='142.15' height='34.09' />
            </a>
          </Link>

          <nav className='hidden md:flex gap-x-8  items-center'>
            <NavLink content={'Home'} link='/' />
            <NavLink content={'Courses'} link='/courses' />
            <NavLink content={'Blog'} link='/' />
            <NavLink content={'About us'} link='/' />
            <NavLink content={'Contact Us'} link='/' />
          </nav>

          <div className='flex gap-8 items-center relative'>
            <div
              className='w-[33px] h-[27.58px] relative hover:scale-[1.2] cursor-pointer'
              title='Cart page'
            >
              <Image
                src={'/icons/cart.svg'}
                width={19.46}
                height={16.58}
                alt='cart logo'
              />
              <div className='w-[13.54px] h-[13.54px] rounded-full bg-gradient-to-r from-dark to-yellow absolute right-0 -top-3'></div>
            </div>
            <div className='lg:flex gap-2 hidden'>
              <Button
                className={
                  'w-[160px] h-[56px] text-white  text-[14px] font-[700px]'
                }
                content='Be A Contributor'
              />
              <Button
                className={
                  'w-[160px] h-[56px] text-white text-[14px] font-[700px] '
                }
                content='Log in'
              />
            </div>
            {/* Menu Icon */}
            <div className='cursor-pointer relative md:hidden'>
              <motion.div
                onClick={() => setIsClicked((prev) => !prev)}
                className={`w-[2rem] h-[2rem] rounded-full duration-300 transition-all hover:bg-gradient-to-r  hover:text-white from-dark to-yellow grid place-items-center ${
                  isClicked
                    ? 'text-white from-dark bg-gradient-to-r to-yellow'
                    : ''
                }`}
              >
                <AiOutlineMenu className='' />
              </motion.div>
            </div>
          </div>
        </div>
        {/* Menu Contents */}
        <div
          className={`${
            isClicked ? 'right-[-3vw]' : 'right-[-100vw]'
          } absolute top-[6vh] right-[-5rem] z-[2000] md:hidden h-[90vh] gap-[5vh] duration-300 flex  flex-col items-center bg-white px-4`}
        >
          <NavLink setIsClicked={setIsClicked} content={'Home'} link='/' />
          <NavLink
            setIsClicked={setIsClicked}
            content={'Courses'}
            link='/courses'
          />
          <NavLink setIsClicked={setIsClicked} content={'Blog'} link='/' />
          <NavLink setIsClicked={setIsClicked} content={'About us'} link='/' />
          <NavLink
            setIsClicked={setIsClicked}
            content={'Contact Us'}
            link='/'
          />
          <Button
            className={
              'w-[160px] h-[56px] text-white  text-[14px] font-[700px]'
            }
            content='Be A Contributor'
          />
          <Button
            className={
              'w-[160px] h-[56px] text-white text-[14px] font-[700px] '
            }
            content='Log in'
          />
        </div>
      </div>
    </header>
  );
};
export default Nav;
