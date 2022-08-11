import Button from "../general/Button";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
const Nav = () => {
  return (
    <header className="grid place-items-center py-[29px] bg-white sticky top-0 z-10 shadow-md">
      <div className="container">
        <div className="flex  justify-between items-center">
          <Link href={"/"}>
            <a className="cursor-pointer">
              <Image
                src="/icons/logo.svg"
                alt="goge africa logo"
                width={159.85}
                height={38.27}
              />
            </a>
          </Link>

          <nav className="flex gap-x-8  items-center">
            <NavLink content={"Home"} link="/" />
            <NavLink content={"Courses"} link="/courses" />
            <NavLink content={"Blog"} link="/blog" />
            <NavLink content={"About us"} link="/about" />
            <NavLink content={"Contact Us"} link="/contact" />
          </nav>

          <div className="flex gap-8 items-center">
            <div className="w-[33px] h-[27.58px] relative">
              <Image
                src={"/icons/cart.svg"}
                width={19.46}
                height={16.58}
                alt="cart logo"
              />
              <div className="w-[13.54px] h-[13.54px] rounded-full bg-gradient-to-r from-dark to-yellow absolute right-0 -top-3">
                {}
              </div>
            </div>
            <Button
              className={
                "w-[160px] h-[56px] text-white  text-[14px] font-[700px]"
              }
              content="Be A Contributor"
            />
            <Button
              className={
                "w-[160px] h-[56px] text-white text-[14px] font-[700px] "
              }
              content="Log in"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Nav;
