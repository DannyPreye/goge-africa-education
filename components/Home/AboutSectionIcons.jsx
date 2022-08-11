import Image from "next/image";

const AboutSectionIcons = ({ width, height, heading, paragraph, src, alt }) => {
  return (
    <div className="grid place-items-center text-center text-gray ">
      <Image src={src} width={width} height={height} alt={alt} />
      <h4 className="text-[20px] font-[800] mt-[26.51px] mb-[7.35px]">
        {heading}
      </h4>
      <p className="text-[14px] w-[253.17px] ">{paragraph}</p>
    </div>
  );
};
export default AboutSectionIcons;
