import { BiSearch } from "react-icons/bi";
import CourseCard from "../Home/CourseCard";
import { motion } from "framer-motion";
import { courses } from "../../test/test";
import { AiFillAppstore } from "react-icons/ai";

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
  <section className="w-screen bg-white ">
    <div className="container mx-auto grid place-items-center">
      <SearchComponent />
    </div>
    <div className="w-[90%]  gap-[67px] grid place-items-center">
      <div>
        <div className="mb-[47px]">
          <div className="w-[328px] flex justify-between ">
            <p>Showing 1–8 of 10 results</p>
            <div className="flex w-[120px] justify-between">
              <p>Show</p>
              <p>6</p>
              <p>12</p>
              <p>16</p>
            </div>
          </div>
        </div>

        {/* Course Card */}
        <div className="grid grid-cols-3 w-[928px] gap-x-[9px] gap-y-[15px]">
          {courses.map((course, i) => {
            return (
              <CourseCard key={i} type={course.type} topic={course.topic} />
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
