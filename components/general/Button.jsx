import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Button = ({ className, onClick, content }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      className={`  bg-gradient-to-r from-dark to-yellow rounded-full ${className} `}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
};
export default Button;
