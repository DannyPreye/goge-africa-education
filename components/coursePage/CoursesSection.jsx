import { BiSearch } from "react-icons/bi";
import CourseCard from "../Home/CourseCard";
import { motion } from "framer-motion";
const SearchComponent = () => (
  <motion.div
    whileInView={{ y: 0 }}
    initial={{ y: 50 }}
    transition={{
      ease: "easeInOut",
      duration: 0.7,
      delay: 1,
      //   repeat: 3,
      //   // repeat: Infinity,
      //   repeatType: "mirror",
      //   repeatDelay: 0,
    }}
    className="bg-gradient-to-r from-dark to-yellow w-[90%] mt-[87px] h-[78px] rounded-[10px] grid place-items-center mb-16 text-white font-[600] shadow-md"
  >
    <div className="w-[90%] border-b-[1px] border-pink flex gap-2">
      <BiSearch />
      <input
        type="text"
        placeholder="Search for Courses i.e web-development"
        className=" bg-transparent  focus:outline-none placeholder:text-pink text-[14px]  flex-1"
      />
    </div>
  </motion.div>
);

export default () => (
  <section className="w-screen bg-white">
    <div className="container mx-auto grid place-items-center">
      <SearchComponent />
    </div>
    <div className="w-[90%] flex gap-[67px]">
      <div>
        {/* Course Card */}
        <div className="grid grid-cols-3"></div>
      </div>
    </div>
  </section>
);
