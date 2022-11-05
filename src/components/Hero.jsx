import { useState, useEffect } from 'react';
import { heroData } from './heroData';

import HeroRight from './HeroRight';
import Navbar from './Navbar';

const Hero = () => {
   const [slideNum, setSlideNum] = useState(0);
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
      const checkIsMobile = () => setIsMobile(window.innerWidth < 768);

      window.addEventListener('resize', checkIsMobile);

      return () => window.removeEventListener('resize', checkIsMobile);
   }, []);

   const nextSlide = () => setSlideNum((prev) => (prev < 2 ? prev + 1 : 0));

   const prevSlide = () => setSlideNum((prev) => (prev > 0 ? prev - 1 : 2));

   const toggleMenu = () => setMenuOpen((prev) => !prev);

   const setSlideImg = () =>
      isMobile
         ? heroData[slideNum].slideImg.mobile
         : heroData[slideNum].slideImg.desktop;

   useEffect(() => {
      const slidePhoto = document.querySelector('.slide-photo');
      // select from HeroRight component
      const slideTitle = document.querySelector('.slide-title');
      const slideDesc = document.querySelector('.slide-desc');
      const slideBtn = document.querySelector('.slide-btn');

      slidePhoto.classList.add('animate-fade-in');
      slideTitle.classList.add('animate-fade-up-1');
      slideDesc.classList.add('animate-fade-up-2');
      slideBtn.classList.add('animate-fade-up-3');

      let timer = setTimeout(() => {
         slidePhoto.classList.remove('animate-fade-in');
         slideTitle.classList.remove('animate-fade-up-1');
         slideDesc.classList.remove('animate-fade-up-2');
         slideBtn.classList.remove('animate-fade-up-3');
      }, 1000);

      return () => clearTimeout(timer);
   }, [slideNum]);

   return (
      <>
         {/*hero left */}
         <div className='relative col-span-12 md:col-span-7 md:h-[67vh]'>
            <img
               src={setSlideImg()}
               alt='hero_img'
               className='slide-photo w-full h-full object-cover animate-fade-in'
            />

            <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
         </div>

         <HeroRight
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            heroData={heroData}
            slideNum={slideNum}
         />
      </>
   );
};

export default Hero;
