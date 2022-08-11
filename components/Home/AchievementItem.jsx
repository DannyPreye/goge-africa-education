import Image from "next/image";
const AchievementItem = ({ num, src, width, height, content, alt }) => {
  return (
    <div className=" text-center">
      <Image src={src} width={width} height={height} alt={alt} />
      <h5 className="text-[40px] text-pink font-[800]">{num}</h5>
      <p className="text-[14px] text-center text-white w-[231px]">{content}</p>
    </div>
  );
};
export default AchievementItem;
