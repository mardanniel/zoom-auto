import { redirect } from "react-router-dom";
import { MeetingContent, Meetings } from "../data/interfaces/meeting";
import { parseDateToLong } from "../helpers/date-helper";
import { clearMeetings, upsertMeeting, getMeetings, getMeeting } from "../services/meetings-service";

export const upsertMeetingAction = async ({ params, request }: any): Promise<Response | undefined> => {
  try {
    let data = await request.formData() as FormData;

    let key = data.get('key') 
              ? data.get('key') 
              : `${data.get('title')}${parseDateToLong(data.get('datetime')!.toString())}`; // Will change

    await upsertMeeting(
      key!.toString(),
      {
        schedule: {
          title: data.get('title')!.toString(),
          datetime: parseDateToLong(data.get('datetime')!.toString()),
          description: data.get('description')!.toString(),
          link: {
            url: data.get('zoomlink')!.toString()
          }
        },
        alarmOptions: {
          delayInMinutes: 10,
          periodInMinutes: 10,
          when: 31312312313132
        }
      }
    );
    return redirect('/');
  }catch(error){
    console.error(error)
  }
}

export const getMeetingLoader = async ({ params }: any) => {
  console.log(`Params: ${params.itemId}`)
  let meeting = new Map(Object.entries(await getMeeting(params.itemId)));
  console.log('The Meeting');
  console.log(meeting);
  
  return { 
    meetingKey: params.itemId ?? null, 
    meetingContent: meeting.get(params.itemId)
  };
}

export const getMeetingsLoader = async (): Promise<Meetings> => {
  let meetings = await getMeetings();
  console.log('The Meetings');
  console.log(meetings);
  return meetings;
}

export const deleteMeetingsAction = async (): Promise<Response> => {
  await clearMeetings();
  return redirect("/");
}