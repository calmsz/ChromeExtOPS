var script = document.createElement('script');
script.src = chrome.extension.getURL('pageContext.js');
(document.head || document.documentElement).appendChild(script);

script.parentNode.removeChild(script);


chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    let event = new CustomEvent('extension:set:server', {'detail': message});
    window.dispatchEvent(event);
})