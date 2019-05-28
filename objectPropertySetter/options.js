// Saves options to chrome.storage
let qadefault = 'https://gestion-de-precios-cua.npapps.ocp.es.wcorp.carrefour.com/gestion-de-precios-ui-v1/';
let devdefault = 'https://gestion-de-precios-dev.npapps.ocp.es.wcorp.carrefour.com/gestion-de-precios-ui-v1/';

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
        qaurl: qadefault,
        devurl: devdefault
    }, function(items) {
      if (!!!items.qaurl) {
        document.getElementById('qaurlStatus').innerHTML = qadefault;
        document.getElementById('devurlStatus').innerHTML = devdefault;        
      } else {
        document.getElementById('qaurlStatus').innerHTML = items.qaurl;
        document.getElementById('devurlStatus').innerHTML = items.devurl;
      }
    });
  }

  function default_values() {
    chrome.storage.sync.set({
      qaurl: qadefault,
      devurl: devdefault
    }, function() {
      qaurlStatus.textContent = `QA saved: ${qadefault}`;
      devurlStatus.textContent = `DEV saved: ${devdefault}`;
    });
  }

  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
    save_options);
  document.getElementById('default_values').addEventListener('click',
    default_values);
      
