import { getMeeting } from '../api/meetings-api';
import { openInNewTab } from '../api/tab-api';

chrome.alarms.onAlarm.addListener(async (alarm) =>{
  try{
    const meetingKey = alarm.name;
    const meeting = new Map(Object.entries(await getMeeting(meetingKey)));
    const meetingContent = meeting.get(meetingKey);
    openInNewTab({
      url: meetingContent?.schedule.link.url
    });
  }catch(e){
    console.error(e);
  }
});

export {};