
// loading user preferences

chrome.storage.sync.get({
  qaurl: 'http://cua.ultraviolento',
  devurl: 'http://dev.ultraviolento'
}, (items) => {
  let urls = {
    qaurl: '',
    devurl: '',
  }
  urls.qaurl = items.qaurl;
  urls.devurl = items.devurl;

  var setServerUrl = function(element) {
    let server = '';
    server = (element.target.id === 'qabutton') ? urls.qaurl : urls.devurl;
    
    let params = {
      server: server
    }

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, params);
      alert(params.server)
    });
  
  }

  document.getElementById('qabutton').addEventListener('click', setServerUrl);
  document.getElementById('devbutton').addEventListener('click', setServerUrl);

});



