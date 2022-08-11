import { useState } from "react";
import CourseLink from "./CourseLink";
import { courses } from "../../test/test";
import CourseCard from "./CourseCard";
import Button from "../general/Button";

const CourseSection = () => {
  const [click, setClick] = useState(false);
  return (
    <section className="bg-pink grid place-items-center">
      <div className="container mx-auto">
        <div className="pt-[120px]  ">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-dark to-yellow text-[40px] text-center font-[800]">
            Courses
          </h2>
          <ul className="flex gap-[34px] mt-[34px] justify-center ">
            <CourseLink content={"All"} />
            <CourseLink content={"Design"} />
            <CourseLink content={"Web development"} />
            <CourseLink content={"Digital"} />
            <CourseLink content={"Photography"} />
            <CourseLink content={"Motion Graphics"} />
            <CourseLink content={"Digital Marketing"} />
          </ul>
          <div className="grid grid-cols-4 gap-y-[15px] gap-x-[9px] mt-[55px]">
            {courses.map((card, index) => (
              <CourseCard topic={card.topic} type={card.type} />
            ))}
          </div>
          <div className="grid place-items-center mt-[41px] mb-[97px]">
            <Button
              className="mt-10 w-[160px] h-[56px] font-[700] text-pink"
              content={"Discover"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CourseSection;
