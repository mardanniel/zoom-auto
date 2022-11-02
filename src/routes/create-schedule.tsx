import { Button } from 'flowbite-react'
import React from 'react'
import { HiPlusCircle } from 'react-icons/hi'
import { Form } from 'react-router-dom'
import { createSchedule } from '../services/storage'

export const action = async () => {
  await createSchedule({
    id: `SomeRandomID${(Math.random() * 1000).toString()}`,
    title: `SomethingTitle${Math.random() * 100}`,
    datetime: new Date(),
    description: `SomethingDescription${Math.random() * 100}`,
    link: {
      url: `SomethingURL${Math.random() * 100}`
    }
  })
}

export default function CreateSchedule() {
  return (
    <Form method="post">
      <Button pill={true} type='submit'>
        Create
        <HiPlusCircle className="ml-2 h-5 w-5" />
      </Button>
    </Form>
  )
}
