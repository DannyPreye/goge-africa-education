import PriceBottom from "../../svg/PriceBottom";
import Bullet from "../../svg/Bullet";

//::::::::::::::::::::::::::::::::: BULLET LIST :::::::::::::::::::::::::::
function List({ bulletContent }) {
  return (
    <div className="flex gap-[11px]">
      <Bullet />
      <p className="text-[10px]">{bulletContent}</p>
    </div>
  );
}

//:::::::::::::::::::::::::::: PRICING CARD ::::::::::::::::::::::::::::::::
const PricingCard = ({
  type,
  amount,
  time,
  content,
  service,
  bulletContent,
}) => {
  return (
    <div className="w-[273px] h-[504px]   rounded-[5px] border-[1px] shadow-md bg-white border-[#EFEFEF]  flex flex-col items-center">
      <div className="w-[80%] text-[24px] font-[600] z-10">
        <h5 className="text-[24px] font-[600] mt-[44px]">{type}</h5>
        <div className="mt-[27px]">
          <div className="flex">
            <span className="">$</span>
            <div className="flex items-baseline flex-wrap justify-end w-[221px]">
              <p className="font-[800] text-[101px] bg-clip-text text-transparent bg-gradient-to-r from-dark to-yellow">
                {amount}
                <span className="text-[17px] text-black font-[600]">
                  /
                  {time?.substring(0, 1).toUpperCase() +
                    time?.slice(1).toLowerCase()}
                </span>
              </p>
            </div>
          </div>

          <p className="text-[10px] w-[194px] mt-[20px]">{content}</p>
        </div>
        <div className="grid gap-y-[14px] mt-[22px] ]">
          {bulletContent?.map((bullet, index) => (
            <List key={index} bulletContent={bullet} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0">
        <PriceBottom />
      </div>
    </div>
  );
};

export default PricingCard;
