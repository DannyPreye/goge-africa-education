import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiCaretRight } from 'react-icons/bi';
import Parallax from 'react-rellax';

const Hero = ({ children }) => {
  return (
    <motion.div
      initial={{ backgroundSize: '300%', backgroundPosition: 'left' }}
      animate={{ backgroundPosition: 'right' }}
      className='bg-gradient-to-r from-dark to-yellow  w-screen grid place-items-center overflow-x-hidden'
    >
      <div className='container mx-auto grid place-items-center px-4 md:px-0'>
        <div className='md:w-[90%] w-full flex justify-between  '>
          <div className='z-[1000]'>{children}</div>
          <div className='W-[426px] h-[382px] md:relative absolute top-0 left-0 '>
            <div className='relative top-[-0%] right-[10%]'>
              <Parallax speed={-5}>
                <Image
                  src='/assets/isolated.svg'
                  alt='icons'
                  width={426}
                  height={382}
                />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Hero;
