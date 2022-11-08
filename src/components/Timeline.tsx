import React from 'react';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { Form, Link } from 'react-router-dom';
import { Meetings } from '../data/interfaces/meeting';
import { getLocaleDateStringFromLong } from '../utils/date';
import { openInNewTab } from '../api/tab-api';
import ZoomIcon from '../assets/images/icons/zoomus-icon.svg';

export const Timeline = (props: { meetings: Meetings }) => {
  return (
    <ol className="relative border-l ml-5 border-gray-200 dark:border-gray-700">                  
      {Object.entries(props.meetings).map(([key, value]) => 
        <li className="mb-10 ml-8 w-[300px]" key={key}>            
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-white rounded-full dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
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
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 w-full text-clip overflow-hidden">
            {value.schedule.description}
          </p>
          <Form method='delete' action={`meeting/remove/${key}`} id='remove-meeting'/>
          <button 
            className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => openInNewTab({
              url: value.schedule.link.url,
              active: true
            })}>
            <img src={ZoomIcon} alt='Zoom Icon'/>
          </button>
          <Link
            to={`meeting/upsert/${key}`}
            className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <HiOutlinePencilAlt />
          </Link>
          <button 
            className="inline-flex items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            type='submit'
            form='remove-meeting'>
            <HiOutlineTrash />
          </button>
        </li>
      )}
    </ol>
  );
};