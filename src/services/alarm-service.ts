export const upsertAlarm = (title: string, alarmOptions: chrome.alarms.AlarmCreateInfo) => {
  try {
    chrome.alarms.create(
      title,
      alarmOptions,
    )
  }catch(e){
    console.error(e);
  }
}

export const getAlarm = async (title: string) : Promise<chrome.alarms.Alarm> => {
  return new Promise((resolve, reject) => {
    chrome.alarms.get(title, (alarm) => {
      chrome.runtime.lastError?.message
      ? reject(chrome.runtime.lastError)
      : resolve(alarm)
    })
  })
}

export const clearAlarms = async (): Promise<boolean | chrome.runtime.LastError> =>  {
  return new Promise((resolve, reject) => {
    chrome.alarms.clearAll((wasCleared: boolean) => {
      chrome.runtime.lastError
      ? reject(chrome.runtime.lastError)
      : resolve(wasCleared)
    })
  })
}

export const removeAlarm = async (title: string): Promise<boolean | chrome.runtime.LastError> => {
  return new Promise((resolve, reject) => {
    chrome.alarms.clear(title, (wasCleared: boolean) => {
      chrome.runtime.lastError
      ? reject(chrome.runtime.lastError)
      : resolve(wasCleared)
    })
  })
} 