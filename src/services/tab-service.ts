export const openInNewTab = (createTabOptions: chrome.tabs.CreateProperties) => {
  new Promise((resolve) => {
    chrome.tabs.create(createTabOptions, (tab) => {
      console.log(`Successfully created ${tab.id}`)
    })
  })
}