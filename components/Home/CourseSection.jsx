import { useState } from "react";
import CourseLink from "./CourseLink";

const CourseSection = () => {
  const [click, setClick] = useState(false);
  return (
    <section className="bg-pink grid place-items-center">
      <div className="pt-[120px] w-[80%] grid place-items-center ">
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
        <div></div>
      </div>
    </section>
  );
};
export default CourseSection;
