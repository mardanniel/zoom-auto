import { Meetings, MeetingContent } from '../data/interfaces/meeting';

export const upsertMeeting = async (meetingKey: string, meetingValue: MeetingContent): Promise<string> => {
  return chrome.storage.local.set({[meetingKey]: meetingValue})
    .then((value) => value)
    .catch((error) => error);
};

export const getMeetings = (): Promise<Meetings> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, (result) => {
      chrome.runtime.lastError
        ? reject(chrome.runtime.lastError)
        : resolve(result);
    });
  })
    .then((value) => value as Meetings)
    .catch((error) => error);
};

export const getMeeting = (meetingKey: string): Promise<Meetings> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([meetingKey], (result) => {
      chrome.runtime.lastError
        ? reject(chrome.runtime.lastError)
        : resolve(result);
    });
  })
    .then((value) => value as Meetings)
    .catch((error) => error);
};

export const removeMeeting = async (meetingKey: string): Promise<boolean | string> => {
  return chrome.storage.local.remove(meetingKey)
    .then(() => true)
    .catch((error) => error);
};

export const clearMeetings = async (): Promise<boolean | string> => {
  return chrome.storage.local.clear()
    .then(() => true)
    .catch((error) => error);
};