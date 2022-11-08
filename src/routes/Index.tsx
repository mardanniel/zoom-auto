import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ZoomAutoIcon from '../assets/images/icons/zoom-auto.svg';

export default function Index() {
  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 w-full z-20">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link className="flex items-center" to={'/'}>
            <img src={ZoomAutoIcon} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ZoomAuto</span>
          </Link>
          <div className="flex md:order-2"></div>
        </div>
      </nav>
      <div className='px-5 flex flex-col items-center w-full h-screen bg-blue-200'>
        <Outlet />
      </div>
    </>
  );
}
