import { Schedule } from "../data/interfaces/schedule"

const DEFAULT_KEY = 'schedules';

export const createSchedule = async (schedule: Schedule): Promise<string> => {
  let schedules: Schedule[] =  await getSchedules();
  schedules.push(schedule);
  return chrome.storage.local.set({ 
    [DEFAULT_KEY]: schedules 
  })
  .then((value) => value)
  .catch((error) => error)
}

export const getSchedules = async (): Promise<Schedule[]> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([DEFAULT_KEY], (result) => {
      chrome.runtime.lastError
      ? reject(chrome.runtime.lastError)
      : resolve(result.schedules ?? []);
    });
  })
  .then((value) => {
    let Rvalue = value as Schedule[];
    return Rvalue;
  })
  .catch((error) => error);
}

export const clearSchedules = async (): Promise<boolean | string> => {
  return chrome.storage.local.clear()
  .then(() => true)
  .catch((error) => error)
}