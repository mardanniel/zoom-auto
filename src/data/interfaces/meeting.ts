import { ZoomLink } from './zoom-link';

export interface Meetings {
  [id:string]: MeetingContent
}

export interface MeetingContent {
  title: string;
  description: string;
  datetime?: number;
  link: ZoomLink;
  repeatDays?: MeetingDays
}

export interface MeetingDays {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}

export interface MeetingByKey { 
  meetingKey: string | null, 
  meetingContent: MeetingContent
}