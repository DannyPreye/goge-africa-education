const CourseLink = ({ content }) => {
  return (
    <li>
      <a className="text-[14px] text-gray focus:font-[700] cursor-pointer">
        {content}
      </a>
    </li>
  );
};
export default CourseLink;
