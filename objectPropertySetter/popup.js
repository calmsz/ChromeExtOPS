function doQabutton() {
  console.log('QA Clicked');
  alert('QA Clicked');
}
var doDevbutton = () => {
  var bkg = chrome.extension.getBackgroundPage();
  bkg.log(123);
  alert(bkg);
  console.log('DEV Clicked');
  window.dev = 'tu tas loco Ramon!?';
  console.log(window.dev);
  alert(document + 'DEV Clicked: ' + window.dev);
}

document.getElementById('qabutton')
  .addEventListener('click', doQabutton);
document.getElementById('devbutton')
  .addEventListener('click', doDevbutton);



//   document.addEventListener('DOMContentReady', function () {
//   console.log(23);
//   document.getElementById('qabutton')
//     .addEventListener('click', doQabutton);
//   document.getElementById('devbutton')
//     .addEventListener('click', doDevbutton);
// });