// background.js

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (changeInfo.status === 'complete' && tab.active) {
//       chrome.scripting.executeScript({
//         target: { tabId: tabId },
//         files: ['content.js']
//       });
//     }
//   });

// background.js

let isScraping = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "readyToScrape" && !isScraping) {
    isScraping = true;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ["content.js"]
      });
      // Navigate to the next page
      chrome.tabs.update(activeTab.id, { url: "https://www.flipkart.com/checkout/init?otracker=browse" });
    });
  }
});

