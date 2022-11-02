import { Button } from 'flowbite-react'
import { HiPlusCircle } from 'react-icons/hi'
import { Form } from 'react-router-dom'

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
