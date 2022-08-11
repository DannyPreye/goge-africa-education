import Image from "next/image";
import { motion } from "framer-motion";
const SuccessStory = () => {
  return (
    <section className="w-screen bg-gradient-to-r from-dark to-yellow grid place-items-center h-[777.5px] overflow-hidden">
      <div className="w-[80%] flex gap-[36px]">
        <div className="relative pt-[130px]">
          <div className=" absolute left-[-14%] top-0">
            <Image src={"/assets/icons.svg"} width={567} height={777.5} />
          </div>
          <div className="z-[1000] text-pink ">
            <h4 className="text-[40px] font-[800] ">
              Success Stories <br /> From Our Students <br /> WorldWide!
            </h4>
            <p className="mt-[40px] w-[346px] text-[14px]">
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for Individual, Advertising &
              Media Specialist, Online Marketing Professionals, Freelancers and
              anyone looking to pursue a career in digital marketing,
              Accounting, Web development, Programming. Multimedia and CAD
              design.
            </p>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="w-[160px] h-[56px] bg-pink rounded-full mt-[43px] mb-[71px]"
            >
              <span className="text-transparent font-[700] text-[14px] bg-clip-text bg-gradient-to-r from-dark to-yellow ">
                Discover
              </span>
            </motion.button>
          </div>
        </div>

        <div>
          <Image src="/assets/MediaPlaceholder.svg" width={803} height={676} />
        </div>
      </div>
    </section>
  );
};
export default SuccessStory;
