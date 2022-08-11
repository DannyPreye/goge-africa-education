import React from "react";
import Image from "next/image";
import GradientBackground from "../general/GradientBackground";
const Achievement = () => {
  return (
    <GradientBackground>
      <div className="w-[80%] h-[298px] flex gap- justify-between">
        <div>
          <Image src="/icons/achievement/graduate" width={103} height={90} />
        </div>
      </div>
    </GradientBackground>
  );
};

export default Achievement;
