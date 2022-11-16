import { Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { MeetingDays } from '../data/interfaces/meeting';
import { getISOStringFromLong } from '../utils/date';

export default function ScheduleInput(props: { repeatDays?: MeetingDays, datetime: number | undefined }) {

  const [toggle, setToggle] = useState(Object.keys(props.repeatDays || {}).length > 0);

  return (
    <>
      <div
        className="flex flex-col gap-4"
        id="toggle"
      >
        <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
          <input 
            type="checkbox"
            name='repeatDays'
            id="default-toggle"
            className="sr-only peer"
            defaultChecked={Object.keys(props.repeatDays || {}).length > 0}
            onClick={() => setToggle(toggle => !toggle)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Repeat
          </span>
        </label>
      </div>
      {
        toggle && 
        <>
          <div className="weekdays">
            <div className='weekdays-item'>
              <input type="checkbox" id="weekday-item-monday" defaultChecked={props.repeatDays?.monday} name='weekday-item-monday'/>
              <label htmlFor="weekday-item-monday">M</label>
            </div>
            <div className='weekdays-item'>
              <input type="checkbox" id="weekday-item-tuesday" defaultChecked={props.repeatDays?.tuesday} name='weekday-item-tuesday'/>
              <label htmlFor="weekday-item-tuesday">T</label>
            </div>
            <div className='weekdays-item'>
              <input type="checkbox" id="weekday-item-wednesday" defaultChecked={props.repeatDays?.wednesday} name='weekday-item-wednesday'/>
              <label htmlFor="weekday-item-wednesday">W</label>
            </div>
            <div className='weekdays-item'>
              <input type="checkbox" id="weekday-item-thursday" defaultChecked={props.repeatDays?.thursday} name='weekday-item-thursday'/>
              <label htmlFor="weekday-item-thursday">Th</label>
            </div>
            <div className='weekdays-item'>
              <input type="checkbox" id="weekday-item-friday" defaultChecked={props.repeatDays?.friday} name='weekday-item-friday'/>
              <label htmlFor="weekday-item-friday">F</label>
            </div>
            <div className='weekdays-item'>
              <input type="checkbox" id="weekday-item-saturday" defaultChecked={props.repeatDays?.saturday} name='weekday-item-saturday'/>
              <label htmlFor="weekday-item-saturday">S</label>
            </div>
            <div className='weekdays-item'>
              <input type="checkbox" id="weekday-item-sunday" defaultChecked={props.repeatDays?.sunday} name='weekday-item-sunday'/>
              <label htmlFor="weekday-item-sunday">Su</label>
            </div>
          </div>
          <div>
            <div 
              className="mb-2 block">
              <Label
                htmlFor="datetime"
                value="Specify date and time"
              />
            </div>
            <TextInput
              id="datetime"
              name='datetime'
              type="datetime-local"
              required={false}
              defaultValue={
                props.datetime
                  ? getISOStringFromLong(props.datetime) 
                  : ''
              }
            />
          </div>
        </>
      }
    </>
  );
}
