import { Schedule } from "../data/interfaces/schedule"

const DEFAULT_KEY = 'schedules';

export const createSchedule = async (schedule: Schedule): Promise<void> => {
  try {
    let schedules: Schedule[] =  await getSchedules();
    schedules.push(schedule);
    new Promise((resolve, reject) => {
      chrome.storage.local.set({ [DEFAULT_KEY]: schedules }, () => {           
        if (chrome.runtime.lastError)
          reject(chrome.runtime.lastError);
        resolve('Successfully stored schedule!');
      });
    });
  }catch(e){
    console.log(e);
  }
}

export const getSchedules = async (): Promise<Schedule[]> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([DEFAULT_KEY], (result) => {
      if(chrome.runtime.lastError){
        reject(chrome.runtime.lastError);
      }else{
        resolve(result.schedules ?? []);
      }
    });
  })
  .then((value) => {
    let Rvalue = value as Schedule[];
    return Rvalue;
  })
  .catch((error) => error);
}

export const clearSchedules = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.clear();
    if(chrome.runtime.lastError)
          reject(chrome.runtime.lastError);
    resolve("Successfully cleared schedules!");
  });
}