import { Schedule } from "./schedule";

export interface Meetings {
  [id:string]: MeetingContent
}

export interface MeetingContent {
  schedule: Schedule;
  alarmOptions: chrome.alarms.AlarmCreateInfo
}

export interface MeetingByKey { 
  meetingKey: string | null, 
  meetingContent: MeetingContent | undefined 
}