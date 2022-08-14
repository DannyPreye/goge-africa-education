import { BiSearch } from "react-icons/bi";
import CourseCard from "../Home/CourseCard";
import { motion } from "framer-motion";
import { courses } from "../../test/test";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import SelectOption from "./SelectOption";

const SearchComponent = () => (
  <motion.div
    whileInView={{ y: 0 }}
    initial={{ y: 50 }}
    transition={{
      ease: "easeInOut",
      duration: 0.7,
      delay: 1,
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
    <div className=" grid place-items-center container mx-auto">
      <div className="flex w-[90%]  gap-[67px] ">
        <div>
          <div className="mb-[47px] flex gap-[291px] items-center">
            <div className="w-[328px] flex justify-between ">
              <p>Showing 1–8 of 10 results</p>
              <div className="flex w-[120px] justify-between">
                <p>Show</p>
                <p>6</p>
                <p>12</p>
                <p>16</p>
              </div>
            </div>
            <div className="flex items-center gap-[34px]">
              <div className="flex w-[56.79px] h-[20.92px] justify-between">
                <BsListTask className="w-[20.92px] h-[20.92px] text-gray" />
                <AiOutlineAppstore className="w-[20.92px] h-[20.92px]" />
              </div>
              <div className="flex gap-[18px]">
                <SelectOption
                  defaultValue={"Filter"}
                  className="w-[87px] h-[45px]"
                />
                <SelectOption
                  defaultValue={"Sort By"}
                  className="w-[104px] h-[45px]"
                />
              </div>
            </div>
          </div>

          {/* Course Card */}
          <div className="grid grid-cols-3 w-[928px] gap-x-[9px] gap-y-[15px] mb-[106px]">
            {courses.map((course, i) => {
              return (
                <CourseCard key={i} type={course.type} topic={course.topic} />
              );
            })}
          </div>
        </div>
        <div className=" h-[822px] w-[315.16px]">
          <ul className="grid gap-[22px]">
            <li className="font-[700]">All Courses</li>
            <li>
              <a href=""> Web Development{} </a>
            </li>
            <li>
              <a href=""> Designs{}</a>
            </li>
            <li>
              <a href="">Photography {}</a>
            </li>
            <li>
              <a href=""> 3D Artist{}</a>
            </li>
            <li>
              <a href=""> Motion Graphics{}</a>
            </li>
            <li>
              <a href=""> Software Engineering {}</a>
            </li>
            <li>
              <a href=""> UI/UX RoadMap {}</a>
            </li>
            <li>
              <a href=""> Sound and Music {}</a>
            </li>
            <li>
              <a href=""> Digital Marketing{}</a>
            </li>
          </ul>
          <p className="font-[700] my-[23px]">Course Type</p>
          <div className="flex gap-[11px]">
            <div className="rounded-full w-[43px] h-[43px] border-[1px] grid place-items-center text-[11px] cursor-pointer">
              Price
            </div>
            <div className="rounded-full w-[43px] h-[43px] border-[1px] grid place-items-center text-[11px] cursor-pointer">
              Free
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
