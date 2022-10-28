import SmoothRec from '../../svg/Rectangle 5.7';
import Button from '../general/Button';
import PricingCard from './PricingCard';

const Pricing = () => {
  return (
    <div className='bg-pink w-screen  relative grid place-items-start '>
      <div className='container mx-auto grid place-items-center mt-[135px]'>
        <div className='flex flex-wrap items-center lg:justify-start justify-center gap-[92px]'>
          <div className='absolute left-0 top-0 hidden lg:block'>
            <SmoothRec />
          </div>
          <div className=' flex flex-col items-center '>
            <h4 className='text-[40px] font-[800] bg-clip-text text-transparent bg-gradient-to-r from-dark to-yellow'>
              Our <br /> Pricing Plans
            </h4>
            <p className='w-[359px] text-[14px] mt-[38px] mb-30px'>
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for
            </p>
            <Button
              content={'Start Free Trial'}
              className={
                'w-[150px] h-[56px] mt-[30px] text-pink text-[14px] font-[700]'
              }
            />
          </div>
          <div className='flex flex-wrap justify-center lg:justify-start gap-[26px]'>
            <PricingCard
              bulletContent={[
                'Unlimited Download',
                'Offline Accessibility',
                '24/7 Supports',
                'Jobs Opportunity',
                '2.0% Transaction Fee',
              ]}
              type={'Premium'}
              amount={'15'}
              time='monthly'
              content={
                'Semaj Africa is an online education platform that delivers video courses, programs and resources for'
              }
            />
            <PricingCard
              bulletContent={[
                'Unlimited Download',
                'Offline Accessibility',
                '24/7 Supports',
                'Jobs Opportunity',
                '2.0% Transaction Fee',
              ]}
              type={'Premium'}
              amount={'120'}
              time='aNNUALLY'
              content={
                'Semaj Africa is an online education platform that delivers video courses, programs and resources for'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
