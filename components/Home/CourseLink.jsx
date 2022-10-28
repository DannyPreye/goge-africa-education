import { motion } from 'framer-motion';
const CourseLink = ({ content }) => {
  return (
    <motion.li whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
      <a className='text-[14px] text-gray focus:font-[700] cursor-pointer'>
        {content}
      </a>
    </motion.li>
  );
};
export default CourseLink;
