import { redirect } from 'react-router-dom';
import { MeetingContent, Meetings } from '../data/interfaces/meeting';
import { parseDateToLong } from '../utils/date';
import { upsertAlarm } from '../api/alarm-api';
import {
  clearMeetings,
  upsertMeeting,
  getMeetings,
  getMeeting,
  removeMeeting,
  checkIfMeetingIdExist,
} from '../api/meetings-api';
import formDataValidation from '../utils/validation';

const DEFAULT_REQUIRED_KEYS = {
  title: 'Meeting Title',
  description: 'Meeting Description',
  zoomlink: 'Zoom Meeting Link'
};

export const upsertMeetingAction = async ({ params, request }: any): Promise<Response | object> => {

  const data: FormData = (await request.formData()) as FormData;

  const formValidation = formDataValidation(DEFAULT_REQUIRED_KEYS, data);

  if (Object.keys(formValidation).length < 1){
    
    const meetingContent: MeetingContent = {
      title: data.get('title')!.toString(),
      description: data.get('description')!.toString(),
      link: {
        url: data.get('zoomlink')!.toString(),
      }
    };
    
    const repeatDays = {
      monday: data.has('weekday-item-monday'),
      tuesday: data.has('weekday-item-tuesday'),
      wednesday: data.has('weekday-item-wednesday'),
      thursday: data.has('weekday-item-thursday'),
      friday: data.has('weekday-item-friday'),
      saturday: data.has('weekday-item-saturday'),
      sunday: data.has('weekday-item-sunday'),
    };
    
    if(Object.values(repeatDays).some((value) => value)){
      meetingContent.repeatDays = repeatDays;
      meetingContent.datetime = parseDateToLong(data.get('datetime')!.toString());
    }

    /**
     * Two Cases of Saving a Meeting
     * - Non-Repeated (One Time Meeting)
     * - Repeated
     */
    
    const key = data.get('key')
      ? data.get('key')
      : `${data.get('title')}${parseDateToLong(data.get('datetime')!.toString())}`;
      
    await upsertMeeting(key!.toString(), meetingContent);

    await upsertAlarm(key!.toString(), {
      when: parseDateToLong(data.get('datetime')!.toString()),
    });

    return redirect('/');
  }else{
    console.log(formValidation);
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
