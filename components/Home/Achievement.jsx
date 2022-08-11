import React from "react";
import Image from "next/image";
import GradientBackground from "../general/GradientBackground";
import AchievementItem from "./AchievementItem";
const Achievement = () => {
  return (
    <GradientBackground>
      <div className="container mx-auto h-[298px] grid place-items-center ">
        <div className="flex w-[90%] justify-center gap-[70px] items-center">
          <AchievementItem
            src={"/icons/achievement/register.svg"}
            width={103}
            height={90}
            num="5,679"
            alt={"register student icon"}
            content={"Registered Students"}
          />
          <AchievementItem
            src={"/icons/achievement/graduate.svg"}
            width={99.83}
            height={88.81}
            num="2,679"
            content={"Student has been helped to achieve their dreams"}
          />

          <AchievementItem
            src={"/icons/achievement/visitor.svg"}
            width={98}
            height={87}
            num="10,000"
            content={"More than 10,000 people visits our site monthly"}
          />

          <AchievementItem
            src={"/icons/achievement/rank.svg"}
            width={87.22}
            height={86}
            num="#10"
            content={
              "Ranked among the top 10 growing online learning startups in West Africa"
            }
          />
        </div>
      </div>
    </GradientBackground>
  );
  p;
};

export default Achievement;
