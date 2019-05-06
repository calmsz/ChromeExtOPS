// Copyright 2019 Anthony Da Corte & Carlos Limonggi. All rights reserved.
// This code is Open Source https://opensource.org/licenses/MIT.


'use strict';

// console.log("The color is green.");
// chrome.runtime.onInstalled.addListener(function() {
//     console.log("The color is green.");
// });

// var yourCustomJavaScriptCode = '...';
// var script = document.createElement('script');
// var code = document.createTextNode('(function() {' + yourCustomJavaScriptCode + '})();');
// script.appendChild(code);
// (document.body || document.head).appendChild(script);


// chrome.tabs.getSelected(null, function(tab){
//     chrome.tabs.executeScript(tab.id, {code: "alert('test');"}, function(response) {
        
//     });
// });

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });

    // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    //   chrome.declarativeContent.onPageChanged.addRules([{
    //     conditions: [new chrome.declarativeContent.PageStateMatcher({
    //       pageUrl: {hostEquals: 'localhost'},
    //     })
    //     ],
    //         actions: [new chrome.declarativeContent.ShowPageAction()]
    //   }]);
    // });
    // chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    //     chrome.tabs.executeScript(tab.id, {code: "alert('test');"}, function(response) {
    //     //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
    //     }); 
    // });
});
