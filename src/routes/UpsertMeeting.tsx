import React from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { HiArrowCircleLeft, HiPlusCircle } from 'react-icons/hi';
import { Form, useActionData, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { MeetingByKey } from '../data/interfaces/meeting';
import { getISOStringFromLong } from '../utils/date';
import DaysCheckbox from '../components/ScheduleInput';
import ScheduleInput from '../components/ScheduleInput';

export default function UpsertMeeting() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const meeting = useLoaderData() as MeetingByKey;
  const errors: { [key: string]: string } = useActionData() as { [key: string]: string };
  
  return (
    <Form method="post" className='flex flex-col gap-4 w-full'>
      <div>
        <TextInput
          id="key"
          name='key'
          type="hidden"
          defaultValue={
            meeting && meeting.meetingKey 
              ? meeting.meetingKey
              : undefined
          }
        />
        <div className="mb-2 block">
          <Label
            htmlFor="title"
            value="Title"
          />
        </div>
        <TextInput
          id="title"
          name='title'
          type="text"
          required={false}
          defaultValue={
            meeting && meeting.meetingKey 
              ? meeting.meetingContent?.title 
              : ''
          }
          helperText={errors?.title ? <Error message={errors?.title}/> : null}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="description"
            value="Description"
          />
        </div>
        <TextInput
          id="description"
          name='description'
          type="text"
          required={false}
          defaultValue={
            meeting && meeting.meetingKey 
              ? meeting.meetingContent.description 
              : ''
          }
          helperText={errors?.description ? <Error message={errors?.description}/> : null}
        />
      </div>
      <div>
        <div 
          className="mb-2 block">
          <Label
            htmlFor="zoomlink"
            value="Zoom meeting link"
          />
        </div>
        <TextInput
          id="zoomlink"
          name='zoomlink'
          type="url"
          required={false}
          pattern='https:\/\/[\w-]*\.?zoom.us\/(j|my)\/[\d\w?=-]+'
          defaultValue={
            meeting && meeting.meetingKey 
              ? meeting.meetingContent.link.url
              : ''
          }
          helperText={errors?.zoomlink ? <Error message={errors?.zoomlink}/> : null}
        />
      </div>
      <ScheduleInput 
        repeatDays={meeting && meeting.meetingKey ? meeting.meetingContent?.repeatDays : undefined}
        datetime={meeting && meeting.meetingKey ? meeting.meetingContent.datetime : undefined}/>
      <div 
        className='flex flex-row content-center'>
        <Button 
          className='grow mx-1' 
          pill={true} 
          color='light' 
          type='button'
          onClick={() => {
            navigate(-1);
          }}>
          Cancel
          <HiArrowCircleLeft 
            className="ml-2 h-5 w-5" />
        </Button>
        <Button 
          className='grow mx-1' 
          pill={true} 
          color='success' 
          type='submit'>
          {
            navigation.state === 'submitting'
              ? <Spinner size="sm" light={true} />
              : meeting && meeting.meetingKey 
                ? 'Update'
                : 'Create'
          }
          <HiPlusCircle 
            className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </Form>
  );
}

function Error(props: { message: string }){
  return (
    <React.Fragment>
      <span>{props.message}</span>
    </React.Fragment>
  );
}
