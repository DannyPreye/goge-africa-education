import Stylish from "../../svg/Stylish";
import Oval from "../../svg/Oval";
import Button from "../general/Button";
const SubscribeInput = () => {
  return (
    <div className="w-[523px] h-[56px] rounded-full bg-white flex ">
      <input
        type="text"
        placeholder="Email"
        className="focus:outline-none border-none bg-transparent flex-1 pl-5"
      />
      <Button
        content={"Submit"}
        className={"w-[160px] h-[56px] text-pink font-[600]"}
      />
    </div>
  );
};

export default () => {
  return (
    <section className="bg-pink relative overflow-hidden">
      <div className="bg-dark-gray w-full absolute bottom-0 h-[89px] z-[100]"></div>
      <div className="absolute top-0">
        <Stylish />
      </div>

      <div className="container mx-auto z-10 relative">
        <div className=" justify-center mt-[130px] mx-auto flex items-center gap-[22px]">
          <div className="grid gap-2">
            <h2 className="bg-clip-text bg-gradient-to-r from-dark to-yellow text-transparent font-[24px] font-[800]">
              Subscribe to <br /> Our Newsletter
            </h2>
            <p className="w-[301px] font-[14px] ">
              Get exclusive discounts and latest news deliverd to your inbox for
              free!
            </p>
          </div>
          <SubscribeInput />
        </div>

        <div className="flex mt-20">
          <div className="relative left-[-10%] bottom-[20%]">
            <Oval />
          </div>
          <div>
            <h2 className="font-[800] text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-dark to-yellow">
              Let's Build <br /> Something <br /> Greater Together
            </h2>
            <p className="text-[14px] w-[446px] mt-9">
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for Individual, Advertising &
              Media Specialist, Online Marketing Professionals, Freelancers and
              anyone looking to pursue a career in digital marketing,
              Accounting, Web development, Programming. Multimedia and CAD
              design.
            </p>
            <Button
              content={"Let's Talk!"}
              className={"w-[160px] h-[56px] mt-5 text-pink font-[700]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
