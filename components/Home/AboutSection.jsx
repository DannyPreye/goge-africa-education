import AboutSectionIcons from './AboutSectionIcons';
import Image from 'next/image';
import Button from '../general/Button';
import Parallax from 'react-rellax';

const AboutSection = () => {
  return (
    <section className='bg-pink w-screen overflow-hidden'>
      <div className='container mx-auto'>
        <div className='grid place-items-center'>
          <div className='mt-[144px] w-[60%] gap-[76px] flex lg:flex-nowrap flex-wrap justify-center'>
            <AboutSectionIcons
              src={'/icons/aboutsec/icons.svg'}
              width={92.11}
              height={102.49}
              alt='unlimited Access icon'
              heading={'Unlimited Access'}
              paragraph={'One subscription unlimited access'}
            />

            <AboutSectionIcons
              src={'/icons/aboutsec/teachers.svg'}
              width={104.52}
              height={93.83}
              alt='expert teachers icon'
              heading={'Expert Teachers'}
              paragraph={
                'Learn from industry experts who are passionate about teaching'
              }
            />

            <AboutSectionIcons
              src={'/icons/aboutsec/icon.svg'}
              width={122.81}
              height={101.29}
              alt='learning icon'
              heading={'Learn Anywhere'}
              paragraph={
                'Switch between your computer, tablet, or mobile device.'
              }
            />
          </div>
        </div>
      </div>

      <div className='container mx-auto  relative'>
        <div className='flex mt-[150px] justify-center '>
          <div className='relative left-[-15%] hidden lg:block'>
            <Image
              src='/assets/placeholder.svg'
              alt='placeholder image'
              width={1200}
              height={636}
            />
          </div>
          <div className='relative top-[-2rem]  lg:top-0 lg:right-[15%]  flex-col flex items-center lg:items-start  lg:w-[534px] w-[90%] '>
            <h4 className='text-[40px] text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-dark to-yellow'>
              Learn A Skill. <br /> Build Your Portfolio. <br />
              <span className='font-[800]'> Get Hired!</span>
            </h4>
            <p className='text-[14px] text-center lg:text-left text-gray mt-[12px]'>
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for Individual, Advertising &
              Media Specialist, Online Marketing Professionals, Freelancers and
              anyone looking to pursue a career in digital marketing,
              Accounting, Web development, Programming. Multimedia and CAD
              design.
            </p>
            <Button
              className='my-10 w-[160px] h-[56px] font-[700] text-pink'
              content={'Discover'}
            />
          </div>
          <div className='absolute container mx-auto left-[-10%] h-[100px] bg-pink -bottom-10'></div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
