import React from 'react'
import { Button, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { useLoaderData } from 'react-router-dom';
import { Schedule } from '../data/interfaces/schedule';
import { getDateTime } from '../helpers/date';

export default function Home() {
  let schedules = useLoaderData() as Schedule[];

  return (
    <div className='flex content-center items-center p-5'>
      {
        schedules.length 
        ? <Timeline className='w-auto'>{schedules.map((value, index, items) => <TimelineItem key={index} schedule={value}/> )}</Timeline>
        : <h1 className='font-medium leading-tight text-xl mt-0 mb-2 text-blue-600'>You have no schedules!</h1>
      }
    </div>
  )
}

const TimelineItem = (props: { schedule : Schedule }) => {
  return (
    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>
          {getDateTime(props.schedule.datetime)}
        </Timeline.Time>
        <Timeline.Title>
          {props.schedule.title}
        </Timeline.Title>
        <Timeline.Body className='break-normal w-72'>
          {props.schedule.description}
        </Timeline.Body>
        <Button gradientDuoTone="cyanToBlue">
          {props.schedule.link.url}
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button>
      </Timeline.Content>
    </Timeline.Item>
  )
}
