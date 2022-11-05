import iconHamburger from '../images/icon-hamburger.svg';
import iconClose from '../images/icon-close.svg';

import logo from '../images/logo.svg';

const Navbar = ({ toggleMenu, menuOpen }) => {
   return (
      <>
         <nav className='absolute w-full mobile:pl-10 top-2 mobile:top-8 flex justify-center mobile:justify-start items-center mobile:gap-10 text-white h-[40px]'>
            <div
               onClick={toggleMenu}
               className='cursor-pointer absolute left-8 block mobile:hidden'
            >
               <img src={iconHamburger} alt='menu_icon' />
            </div>

            <img src={logo} alt='logo' className='cursor-pointer' />

            <ul className='hidden mobile:flex space-x-5'>
               <li className='navlink animate-fade-up-1'>
                  <a href='#'>home</a>
               </li>
               <li className='navlink animate-fade-up-2'>
                  <a href='#'>shop</a>
               </li>
               <li className='navlink animate-fade-up-3'>
                  <a href='#'>about</a>
               </li>
               <li className='navlink animate-fade-up-4'>
                  <a href='#'>contact</a>
               </li>
            </ul>
         </nav>

         {/* mobile nav */}
         <nav
            className={`absolute top-0 left-0 w-full min-h-[60px] bg-white px-8 ${
               menuOpen ? 'flex' : 'hidden'
            } items-center justify-between flex-wrap`}
         >
            <div onClick={toggleMenu} className='cursor-pointer'>
               <img
                  src={iconClose}
                  alt='menu_icon'
                  className='w-[20px] h-[20px] mr-4'
               />
            </div>

            <ul className='flex space-x-3 h-full items-center justify-end flex-wrap'>
               <li className='animate-fade-up-1'>
                  <a href='#'>home</a>
               </li>
               <li className='animate-fade-up-2'>
                  <a href='#'>shop</a>
               </li>
               <li className='animate-fade-up-3'>
                  <a href='#'>about</a>
               </li>
               <li className='animate-fade-up-4'>
                  <a href='#'>contact</a>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navbar;
