import { Link, Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <div className='w-100 flex flex-col items-center'>
        <Link to={'/'} className='flex mt-5'>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ZoomAuto
          </span>
        </Link>
        {/* Outlet */}
        <div className='p-5 flex flex-col items-center w-full'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
