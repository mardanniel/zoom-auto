chrome.runtime.onInstalled.addListener(() => {
  console.log('installed')
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log('Alarm here');
  console.log(alarm)
  chrome.tabs.create({
    url: 'https://www.google.com'
  });
})