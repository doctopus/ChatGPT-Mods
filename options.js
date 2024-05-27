document.getElementById('saveButton').addEventListener('click', function() {
    const selectedFont = document.getElementById('fontSelect').value;
    const selectedFontSize = document.getElementById('fontSizeSelect').value;
    console.log('Saving font:', selectedFont);
    console.log('Saving font size:', selectedFontSize);
    browser.storage.sync.set({ font: selectedFont, fontSize: selectedFontSize }).then(() => {
        alert('Font settings saved!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    browser.storage.sync.get(['font', 'fontSize']).then((result) => {
        console.log('Loaded font:', result.font);
        console.log('Loaded font size:', result.fontSize);
        if (result.font) {
            document.getElementById('fontSelect').value = result.font;
        }
        if (result.fontSize) {
            document.getElementById('fontSizeSelect').value = result.fontSize;
        }
    });
});
