import { getMeeting } from "../services/meetings-service";
import { openInNewTab } from "../services/tab-service";

chrome.alarms.onAlarm.addListener(async (alarm) =>{
  try{
    let meetingKey = alarm.name;
    let meeting = new Map(Object.entries(await getMeeting(meetingKey)));
    let meetingContent = meeting.get(meetingKey);
    openInNewTab({
      url: meetingContent?.schedule.link.url
    });
  }catch(e){
    console.log(e);
  }
});

export {}