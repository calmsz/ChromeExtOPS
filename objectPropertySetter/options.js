// Saves options to chrome.storage
function save_options() {
    var qaurlValue = document.getElementById('qaurlInput').value;
    var devurlValue = document.getElementById('devurlInput').value;
    chrome.storage.sync.set({
      qaurl: qaurlValue,
      devurl: devurlValue
    }, function() {
      // Update status to let user know options were saved.
      var qaurlStatus = document.getElementById('qaurlStatus');
      var devurlStatus = document.getElementById('devurlStatus');

      qaurlStatus.textContent = 'Options saved.';
      devurlStatus.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default values
    chrome.storage.sync.get({
        qaurl: 'http://cua.ultraviolento',
        devurl: 'http://dev.ultraviolento'
    }, function(items) {
      document.getElementById('qaurlStatus').value = items.qaurl;
      document.getElementById('devurlStatus').value = items.devurl;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);