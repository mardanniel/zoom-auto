import { getMeeting } from '../api/meetings-api';
import { openInNewTab } from '../api/tab-api';

chrome.alarms.onAlarm.addListener(async (alarm) =>{
  console.log('alarmed');
  try{
    const meetingKey = alarm.name;
    const meeting = new Map(Object.entries(await getMeeting(meetingKey)));
    const meetingContent = meeting.get(meetingKey);
    openInNewTab({
      url: meetingContent?.link.url
    });
  }catch(e){
    console.error(e);
  }
});

export {};