import Hero from '../hero/Hero';
import LargeText from '../general/LargeText';
import Parallax from 'react-rellax';
import { motion } from 'framer-motion';
export default () => {
  return (
    <Hero>
      <Parallax speed={1}>
        <motion.div
          initial={{
            x: -100,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 2,
          }}
        >
          <LargeText className='text-pink mt-[110px] w-[534px]'>
            Browse Thousands of Our Video Tutorial Created Only for You.
          </LargeText>
          <p className='text-[18px] w-[444px] mt-[25px] mb-[96px] text-pink'>
            Access all tutorials and resources when you become a premium member
            of Semaj Africa.
          </p>
        </motion.div>
      </Parallax>
    </Hero>
  );
};
