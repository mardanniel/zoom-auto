import {
  Breadcrumb,
  Button,
  Navbar,
} from 'flowbite-react';
import { HiOutlineTrash } from 'react-icons/hi';
import { Form, Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div className='w-100 flex flex-col items-center'>
        <Link to={'/'} className='flex my-5'>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ZoomAuto
          </span>
        </Link>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Form id='clear-schedules-form' method='post' action='clear-schedules'/>
          <button 
            form='clear-schedules-form' 
            type="submit" 
            className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Clear All
          </button>
          <Link 
            className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white' 
            to={'create-schedule'}>
              Create
          </Link>
        </div>
        {/* Outlet */}
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
