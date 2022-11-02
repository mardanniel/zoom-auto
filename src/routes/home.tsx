import React from 'react'
import { Button, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { useLoaderData } from 'react-router-dom';

import { Schedule } from '../data/interfaces/schedule';
import { clearSchedules, createSchedule, getSchedules } from '../services/storage';

export async function loader() {
  let schedules = await getSchedules();
  return schedules;
}

export default function Home() {
  let schedules = useLoaderData() as Schedule[];

  return (
    <div className='flex content-center items-center p-5'>
      <Timeline className='w-auto'>
        {schedules.map((value, index, items) => <TimelineItem key={index} schedule={value}/> )}
      </Timeline>
    </div>
  )
}

const TimelineItem = (props: any) => {
  return (
    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>
          {props.schedule.datetime.toString()}
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
