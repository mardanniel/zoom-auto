import { LoaderFunction, redirect } from 'react-router-dom';
import { Meetings } from '../data/interfaces/meeting';
import { parseDateToLong } from '../utils/date';
import { upsertAlarm } from '../api/alarm-api';
import {
  clearMeetings,
  upsertMeeting,
  getMeetings,
  getMeeting,
  removeMeeting,
} from '../api/meetings-api';
import formDataValidation from '../utils/validation';

const DEFAULT_REQUIRED_KEYS = [
  ['Meeting Title', 'title'],
  ['Meeting Description', 'description'],
  ['Meeting Date and Time', 'datetime'],
  ['Zoom Meeting Link', 'zoomlink']
];

export const upsertMeetingAction = async ({ params, request }: any): Promise<Response | object> => {

  const data: FormData = (await request.formData()) as FormData;

  const formValidation = formDataValidation(DEFAULT_REQUIRED_KEYS, data);

  if (Object.keys(formValidation).length < 1){

    const key = data.get('key')
      ? data.get('key')
      : `${data.get('title')}${parseDateToLong(data.get('datetime')!.toString())}`;
      
    await upsertMeeting(key!.toString(), {
      schedule: {
        title: data.get('title')!.toString(),
        datetime: parseDateToLong(data.get('datetime')!.toString()),
        description: data.get('description')!.toString(),
        link: {
          url: data.get('zoomlink')!.toString(),
        },
      },
    });

    await upsertAlarm(key!.toString(), {
      when: parseDateToLong(data.get('datetime')!.toString()),
    });
    return redirect('/');
  }else{
    return formValidation;
  }  
};

export const getMeetingLoader = async ({ params }: any) => {
  const meeting = new Map(Object.entries(await getMeeting(params.itemId)));

  return {
    meetingKey: params.itemId ?? null,
    meetingContent: meeting.get(params.itemId),
  };
};

export const getMeetingsLoader = async (): Promise<Meetings> => {
  const meetings = await getMeetings();
  return meetings;
};

export const removeMeetingAction = async ({
  params,
}: any): Promise<Response> => {
  await removeMeeting(params.itemId);
  return redirect('/');
};

export const deleteMeetingsAction = async (): Promise<Response> => {
  await clearMeetings();
  return redirect('/');
};
