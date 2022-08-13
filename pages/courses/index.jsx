import HeroSection from "../../components/coursePage/HeroSection";
import CoursesSection from "../../components/coursePage/CoursesSection";

import { motion } from "framer-motion";

const index = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <HeroSection />
      <CoursesSection />
    </motion.main>
  );
};
export default index;
