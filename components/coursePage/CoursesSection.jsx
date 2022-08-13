import { BiSearch } from "react-icons/bi";
import CourseCard from "../Home/CourseCard";

const SearchComponent = () => (
  <div className="bg-gradient-to-r from-dark to-yellow w-[90%] mt-[87px] h-[78px] rounded-[10px] grid place-items-center mb-16 text-white font-[600] shadow-md">
    <div className="w-[90%] border-b-[1px] border-pink flex gap-2">
      <BiSearch />
      <input
        type="text"
        placeholder="Search for Courses i.e web-development"
        className=" bg-transparent  focus:outline-none placeholder:text-pink text-[14px]  flex-1"
      />
    </div>
  </div>
);

export default () => (
  <section className="w-screen bg-white">
    <div className="container mx-auto grid place-items-center">
      <SearchComponent />
    </div>
  </section>
);
