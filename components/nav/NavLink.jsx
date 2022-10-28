import Link from 'next/link';
import { motion } from 'framer-motion';

const NavLink = ({ content, link, className, setIsClicked }) => {
  return (
    <Link href={link}>
      <motion.a
        onClick={() => setIsClicked && setIsClicked(false)}
        whileHover={{ scale: 1.2 }}
        className={`text-transparent bg-clip-text bg-gradient-to-r font-[400] cursor-pointer text-[15px] focus:font-[700] from-dark to-yellow focus:scale-[1.5] block first `}
      >
        {content}
      </motion.a>
    </Link>
  );
};
export default NavLink;
