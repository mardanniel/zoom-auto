import { Form, Link, useLoaderData } from 'react-router-dom';
import { Timeline } from '../components/Timeline';
import { Meetings } from '../data/interfaces/meeting';

import { BsCalendarPlus } from 'react-icons/bs'
import { MdDeleteSweep } from 'react-icons/md'

export default function MeetingList() {
  let meetings = useLoaderData() as Meetings;

  return (
    <>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Form id='clear-meetings-form' method='delete' action='meeting/clearAll' />
        <button
          form='clear-meetings-form'
          type='submit'
          className='text-white border border-red-700 hover:bg-white bg-red-700 dark:border-red-500 dark:text-red-500 dark:focus:ring-red-800 focus:ring-red-300 hover:text-red-700 dark:hover:text-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2'>
          <MdDeleteSweep className='mr-2'/>
          Clear All
          <span className="sr-only">Clear All Meetings Button</span>
        </button>
        <Link
          to={'meeting/upsert'}
          className='text-white border border-green-700 hover:bg-white bg-green-700 dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800 focus:ring-green-300 hover:text-green-700 dark:hover:text-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2'>
          <BsCalendarPlus className='mr-2'/>
          Create
          <span className="sr-only">Create Meeting Button</span>
        </Link>
      </div>
      <div className='flex content-start pt-5'>
        {
          Object.keys(meetings).length
          ? <Timeline meetings={meetings} />
          : <h1 className='font-medium leading-tight text-xl mt-0 mb-2 text-blue-600'>You have no schedules!</h1>
        }
      </div>
    </>
  )
}