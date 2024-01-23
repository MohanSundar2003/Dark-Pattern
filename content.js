

// (function() {
//   const scrapeData = () => {
//     let priceElement, shippingElement, taxesElement, packageElement, totalElement;

//     priceElement = document.evaluate('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div[4]/div[1]/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     shippingElement = document.evaluate('//*[@id="container"]/div/div[2]/div/div[2]/div/div[1]/div/div[2]/div[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     taxesElement = document.querySelector(".taxes");
//     packageElement = document.evaluate('//*[@id="container"]/div/div[2]/div/div[2]/div/div[1]/div[1]/div[3]/div[2]/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//     totalElement = document.evaluate('//*[@id="container"]/div/div[2]/div/div[2]/div/div[1]/div[1]/div[4]/div/div[2]/span/div/div/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

//     let price = priceElement ? priceElement.textContent.trim():0;
//     let shipping = shippingElement ? shippingElement.textContent.trim() : 0;
//     let taxes = taxesElement ? taxesElement.textContent.trim() : 0;
//     let packages = packageElement ? packageElement.textContent.trim() : 0;
//     let total = totalElement ? totalElement.textContent.trim() : 0;

//     chrome.runtime.sendMessage({
//       action: "showPriceDetails",
//       price,
//       shipping,
//       taxes,
//       packages,
//       total
//     });
//   };

//   const goToNextPage = () => {
//     // Use XPath to find the button to go to the next page
//     const nextPageButtonXPath = '//*[@id="container"]/div/div[3]/div[1]/div[1]/div[2]/div/ul/li[2]/form/button';
//     const nextPageButton = document.evaluate(nextPageButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

//     if (nextPageButton) {
//       // Click the button to navigate to the next page
//       nextPageButton.click();

//       // After navigating to the next page, wait for a brief moment to ensure the page is loaded
//       setTimeout(scrapeData, 2000); // Adjust the timeout as needed
//     } else {
//       console.error('Next page button not found on the current page.');
//     }
//   };

//   // Initial execution to go to the next page
//   goToNextPage();
// })();


(function() {
  let priceElement, shippingElement, taxesElement, packageElement;

  priceElement = document.evaluate('//*[@id="container"]/div/div[2]/div/div[2]/div/div[1]/div[1]/div[1]/div[2]/span/div/div/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  shippingElement = document.evaluate('//*[@id="container"]/div/div[2]/div/div[2]/div/div[1]/div/div[2]/div[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  taxesElement = document.querySelector(".taxes");
  packageElement = document.evaluate('//*[@id="container"]/div/div[2]/div/div[2]/div/div[1]/div[1]/div[3]/div[2]/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  totalElement = document.evaluate('//*[@id="container"]/div/div[2]/div/div[2]/div/div[1]/div[1]/div[3]/div/div[2]/span/div/div/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;



  let price = priceElement.textContent.trim();
  let shipping = shippingElement ? shippingElement.textContent.trim() : 0;
  let taxes = taxesElement ? taxesElement.textContent.trim() : 0;
  let packages = packageElement ? packageElement.textContent.trim() : 0;
  let total = totalElement ? totalElement.textContent.trim() : 0;

  chrome.runtime.sendMessage({
    action: "showPriceDetails",
    price,
    shipping,
    taxes,
    packages,
    total
  });
})();



