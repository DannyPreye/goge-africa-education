import { motion } from 'framer-motion';
export default () => {
  return (
    <motion.svg
      initial={{ rotate: 360 }}
      animate={{ rotate: 0 }}
      transition={{ repeat: 'infinite' }}
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ repeat: 'infinite' }}
        d='M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z'
        stroke='url(#paint0_linear_3_260)'
        strokeWidth='2'
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ repeat: 'infinite' }}
        d='M8.60742 4.28564L5.35742 7.53564L3.85742 6.03564'
        stroke='url(#paint1_linear_3_260)'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_3_260'
          x1='10.87'
          y1='1.24184'
          x2='-0.356884'
          y2='4.55087'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFC000' />
          <stop offset='1' stopColor='#FF8A00' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_3_260'
          x1='8.54567'
          y1='4.36424'
          x2='3.65684'
          y2='6.47023'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFC000' />
          <stop offset='1' stopColor='#FF8A00' />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
