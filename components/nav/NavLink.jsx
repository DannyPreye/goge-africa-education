import Link from "next/link";

const NavLink = ({ content, link, className }) => {
  return (
    <Link href={link}>
      <a
        className={`text-transparent bg-clip-text bg-gradient-to-r font-[400] text-[15px] focus:font-[700] from-dark to-yellow focus:border-b-4 block first`}
      >
        {content}
      </a>
    </Link>
  );
};
export default NavLink;
