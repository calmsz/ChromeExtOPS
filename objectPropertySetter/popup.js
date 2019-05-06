
document.getElementById('qabutton').addEventListener('click', setServerUrl);
document.getElementById('devbutton').addEventListener('click', setServerUrl);


function setServerUrl(element){
  const params = {
    server: 'http://dev.ultraviolento'
  }
  if (element.target.id === "qabutton") {
    params.server = "http://cua.ultraviolento"
  }
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, params);
  });
}