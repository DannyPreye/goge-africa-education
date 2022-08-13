import Hero from "../hero/Hero";
import Parallax from "react-rellax";
import { motion } from "framer-motion";
import { BiCaretRight } from "react-icons/bi";
import Image from "next/image";

const itemA = {
  hidden: { scale: 0, y: 100 },
  show: { scale: 1, y: 0 },
};
export default () => (
  <Hero>
    <Parallax speed={1}>
      <motion.div
        initial={{
          x: -100,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 2,
          staggerChildren: 0.1,
          delayChildren: 0.3,
        }}
        className=" max-w-[534px]"
      >
        <motion.h1 className="text-[44px] text-pink font-[900] mt-[100px]">
          Get Access to Unlimited Educational Resources. Everywhere, Everytime!
        </motion.h1>
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
            <BiCaretRight className="text-pink " width={7.67} height={10.73} />
          </motion.button>
        </div>
      </motion.div>
    </Parallax>
  </Hero>
);
