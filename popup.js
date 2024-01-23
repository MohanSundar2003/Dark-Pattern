

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("price").textContent = "0";
  document.getElementById("shipping").textContent = "0";
  document.getElementById("taxes").textContent = "0";
  document.getElementById("packages").textContent = "0";
  document.getElementById("total").textContent = "0";
 });


chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: ["content.js"]
    });
  });

  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showPriceDetails") {
      const price = request.price;
      const shipping = request.shipping;
      const taxes = request.taxes;
      const packages = request.packages;
      const total =  request.total
  
      document.getElementById("price").textContent = price;
      document.getElementById("shipping").textContent = shipping;
      document.getElementById("taxes").textContent = taxes;
      document.getElementById("packages").textContent = packages;
      document.getElementById("total").textContent = total;
    }
  });
  

