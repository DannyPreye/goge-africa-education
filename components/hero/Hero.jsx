import Image from "next/image";
import { motion } from "framer-motion";
import { BiCaretRight } from "react-icons/bi";
import Parallax from "react-rellax";

const Hero = ({ children }) => {
  return (
    <motion.div
      initial={{ backgroundSize: "300%", backgroundPosition: "left" }}
      animate={{ backgroundPosition: "right" }}
      className="bg-gradient-to-r from-dark to-yellow  w-screen grid place-items-center overflow-x-hidden"
    >
      <div className="container mx-auto grid place-items-center">
        <div className="w-[90%] flex justify-between ">
          {children}
          <div className="W-[426px] h-[382px] relative ">
            <div className="relative top-[-0%] right-[10%]">
              <Parallax speed={-5}>
                <Image
                  src="/assets/isolated.svg"
                  alt="icons"
                  width={426}
                  height={382}
                />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Hero;
