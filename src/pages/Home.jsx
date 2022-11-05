import Hero from '../components/Hero';

import aboutDark from '../images/image-about-dark.jpg';
import aboutLight from '../images/image-about-light.jpg';

const Home = () => {
   return (
      <div className='grid grid-cols-12 h-screen'>
         <Hero />

         {/* bottom left */}
         <div className='relative col-span-12 md:col-span-3 md:h-[33vh]'>
            <img
               src={aboutDark}
               alt='about_dark_img'
               className='w-full h-full object-cover animate-fade-in'
            />
         </div>

         {/* bottom center */}
         <div className='relative col-span-12 md:col-span-6 md:h-[33vh] bg-white flex flex-col justify-center px-8 mobile:px-10 py-16 md:py-0'>
            <h4 className='text-md font-bold uppercase tracking-[5px] mb-2 animate-fade-up-1'>
               About our furniture
            </h4>
            <p className='text-dark-gray text-base md:text-xs lg:text-base animate-fade-up-2'>
               Our multifunctional collection blends design and function to suit
               your individual taste. Make each room unique, or pick a cohesive
               theme that best express your interests and what inspires you.
               Find the furniture pieces you need, from traditional to
               contemporary styles or anything in between. Product specialists
               are available to help you create your dream space.
            </p>
         </div>

         {/* bottom right */}
         <div className='relative col-span-12 md:col-span-3 md:h-[33vh]'>
            <img
               src={aboutLight}
               alt='about_light_img'
               className='w-full h-full object-cover animate-fade-in'
            />
         </div>
      </div>
   );
};

export default Home;
