// console.log("Popup script loaded.");
//
document.getElementById('openOptions').addEventListener('click', function() {
    console.log("Open Options button clicked.");
    browser.runtime.openOptionsPage();
});
