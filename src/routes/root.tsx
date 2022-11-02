import {
  Button,
  Navbar,
} from 'flowbite-react';
import {  HiOutlineTrash } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import { clearSchedules } from '../services/storage';
import CreateSchedule from './create-schedule';

export default function Root() {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ZoomAuto
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link>
            <Button pill={true} color='failure' onClick={clearSchedules}>
              Clear All
              <HiOutlineTrash className="ml-2 h-5 w-5" />
            </Button>
          </Navbar.Link>
          <Navbar.Link>
            <CreateSchedule />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {/* Outlet */}
      <Outlet />
    </>
  )
}
