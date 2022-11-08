export const openInNewTab = (createTabOptions: chrome.tabs.CreateProperties) => {
  new Promise((resolve) => {
    chrome.tabs.create(createTabOptions, (tab) => {
      resolve(`Successfully created ${tab.id}`);
    });
  });
};