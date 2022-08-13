import Image from "next/image";
import Link from "next/link";

const FooterLinks = ({ Logo, heading, children }) => (
  <div className=" text-[15px] text-pink grid gap-8 items-start">
    <div className="">
      {heading ? (
        <h3 className="font-[600]">{heading}</h3>
      ) : (
        Logo && <Image src="/icons/Logo.svg" width="142.15" height="34.09" />
      )}
    </div>
    <div>{children}</div>
  </div>
);

const Icon = ({ src }) => {
  return <Image src={src} width={20.28} height={21} />;
};

export default (first) => {
  return (
    <footer className="w-screen bg-dark-gray overflow-hidden">
      <div className="container mx-auto">
        <div className="flex gap-[84px] mb-[29px] justify-center">
          <FooterLinks Logo>
            <p className="w-[265px]">
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources.
            </p>
            <div className="flex mt-8 gap-[10.96px]">
              <Icon src={"/icons/social/facebook.png"} />
              <Icon src={"/icons/social/twitter.png"} />
              <Icon src={"/icons/social/youtube.png"} />
              <Icon src={"/icons/social/4.png"} />
            </div>
          </FooterLinks>
          <FooterLinks heading={"Quicklinks"}>
            <div className="w-[152px]">
              <p>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </p>
              <p>
                {" "}
                <Link href="/courses">
                  <a>Courses</a>
                </Link>
              </p>
              <p>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </p>
              <p>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </p>
              <p>
                {" "}
                <Link href="/blog">
                  <a>Become A contributor</a>
                </Link>
              </p>
            </div>
          </FooterLinks>
          <FooterLinks heading="Contact Us">
            <p className="w-[238px]">
              (+55) 254. 254. 254 Info@lsemajafrica.com Helios Tower 75 Tam
              Trinh Hoang Mai - Ha Noi - Viet Nam
            </p>
          </FooterLinks>
          <FooterLinks>
            <p>Terms and Conditions</p>
            <p>Fag</p>
          </FooterLinks>
        </div>
      </div>

      <div className="bg-black h-[39px] w-full">
        <div className="container mx-auto grid place-items-center">
          <div className="text-[14px] font-[700] h-full flex justify-between w-[83%] text-pink pt-2">
            <h4 className=" ">
              All Right Reserved | GOGE AFRICA{` ${new Date().getFullYear()}`} |
              Developed by Olawoyin Daniel
            </h4>
            <div className="flex gap-7">
              <p>Privacy Policy</p>
              <p>
                Site <span className="text-dark">Credit</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
