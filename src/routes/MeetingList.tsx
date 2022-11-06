import { Form, Link, useLoaderData } from 'react-router-dom';
import { Timeline } from '../components/Timeline';
import { Meetings } from '../data/interfaces/meeting';

export default function MeetingList() {
  let meetings = useLoaderData() as Meetings;

  return (
    <>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Form id='clear-meetings-form' method='delete' action='meeting/clearAll' />
        <button
          form='clear-meetings-form'
          type="submit"
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Clear All
        </button>
        <Link
          className='py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white'
          to={'meeting/upsert'}>
          Create
        </Link>
      </div>
      <div className='flex content-start p-5'>
        {
          meetings
          ? <Timeline meetings={meetings} />
          : <h1 className='font-medium leading-tight text-xl mt-0 mb-2 text-blue-600'>You have no schedules!</h1>
        }
      </div>
    </>
  )
}