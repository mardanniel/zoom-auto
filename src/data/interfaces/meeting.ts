import { Schedule } from './schedule';

export interface Meetings {
  [id:string]: MeetingContent
}

export interface MeetingContent {
  schedule: Schedule;
}

export interface MeetingByKey { 
  meetingKey: string | null, 
  meetingContent: MeetingContent
}