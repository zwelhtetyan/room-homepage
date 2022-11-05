import angleLeft from '../images/icon-angle-left.svg';
import angleRight from '../images/icon-angle-right.svg';

const HeroRight = ({ nextSlide, prevSlide, heroData, slideNum }) => {
   return (
      <div className='relative col-span-12 md:col-span-5 flex flex-col justify-center px-8 mobile:px-10 xl:px-20 pb-24 md:pb-10 pt-10 md:pt-0 md:h-[67vh] bg-white'>
         <h2 className='text-[2.5rem] font-bold leading-none animate-fade-up-1 slide-title'>
            {heroData[slideNum].title}
         </h2>

         <p className='text-dark-gray my-4 text-base md:text-xs lg:text-base animate-fade-up-2 slide-desc'>
            {heroData[slideNum].desc}
         </p>

         <div className='flex items-center space-x-3 cursor-pointer group animate-fade-up-3 slide-btn'>
            <p className='text-sm uppercase tracking-[7px] group-hover:text-dark-gray duration-200'>
               shop now
            </p>
            <svg width='40' height='12' xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z'
                  fill='#000'
                  fillRule='nonzero'
                  className='group-hover:fill-dark-gray duration-200'
               />
            </svg>
         </div>

         <div className='flex absolute bottom-0 left-0'>
            <button
               onClick={nextSlide}
               className='bg-black w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center hover:bg-very-dark-gray'
            >
               <img src={angleLeft} alt='left_arrow' />
            </button>
            <button
               onClick={prevSlide}
               className='bg-black w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center hover:bg-very-dark-gray'
            >
               <img src={angleRight} alt='left_arrow' />
            </button>
         </div>
      </div>
   );
};

export default HeroRight;
