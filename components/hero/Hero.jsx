import Image from "next/image";
import { motion } from "framer-motion";
import { BiCaretRight } from "react-icons/bi";
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-dark to-yellow  w-screen grid place-items-center overflow-x-hidden">
      <div className="container mx-auto">
        <div className="w-[90%] flex justify-between ">
          <div className=" max-w-[534px]">
            <h1 className="text-[44px] text-pink font-[900] mt-[100px]">
              Get Access to Unlimited Educational Resources. Everywhere,
              Everytime!
            </h1>
            <p className="text-[18px] max-w-[444px] text-pink mt-[26px]">
              Premium access to more than 10,000 resources ranging from courses,
              events e.t.c.
            </p>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="w-[160px] h-[56px] bg-pink rounded-full mt-[19px] mb-[71px]"
            >
              <span className="text-transparent font-[700] text-[14px] bg-clip-text bg-gradient-to-r from-dark to-yellow ">
                Get access
              </span>
            </motion.button>
            <div className="flex w-[96px] items-center mb-[71px] gap-[10px] ">
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-[30.67px] h-[30.67px] rounded-full bg-pink shadow-md grid place-items-center"
              >
                <BiCaretRight
                  className="text-yellow bg-clip-text bg-gradient-to-r from-dark to-yellow rotate-[180deg]"
                  width={7.67}
                  height={10.73}
                />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.8 }}
                className="w-[46px] h-[46px] grid place-items-center shadow-md rounded-full bg-gradient-to-r from-dark to-yellow"
              >
                <BiCaretRight
                  className="text-pink "
                  width={7.67}
                  height={10.73}
                />
              </motion.button>
            </div>
          </div>
          <div className="W-[426px] h-[382px] relative ">
            <div className="relative top-[-0%] right-[10%]">
              <Image
                src="/assets/isolated.svg"
                alt="icons"
                width={426}
                height={382}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
