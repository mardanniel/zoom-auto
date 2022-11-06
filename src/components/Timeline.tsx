import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Meetings } from '../data/interfaces/meeting'
import { getLocaleDateStringFromLong } from '../helpers/date-helper'
import { openInNewTab } from '../services/tab-service'

export const Timeline = (props: { meetings: Meetings }) => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
      {Object.entries(props.meetings).map(([key, value]) => 
        <li className="mb-10 ml-6" key={key}>            
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {value.schedule.title}
            <span 
              className={`${value.schedule.datetime > Date.now() ? 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800' : 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-800'} text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3`}>
              {value.schedule.datetime > Date.now() ? 'Soon' : 'Past'}
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {getLocaleDateStringFromLong(value.schedule.datetime)}
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {value.schedule.description}
          </p>
          <Link to={`meeting/upsert/${key}`} >some link to click</Link>
          <button 
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={() => openInNewTab({
              url: value.schedule.link.url,
              active: true
            })}>
            Go to {value.schedule.title} meeting now
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </button>
        </li>
      )}
    </ol>
  )
}