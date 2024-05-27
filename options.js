document.getElementById('saveButton').addEventListener('click', function() {
    const selectedFont = document.getElementById('fontSelect').value;
    console.log('Saving font:', selectedFont);
    browser.storage.sync.set({ font: selectedFont }).then(() => {
        alert('Font saved!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    browser.storage.sync.get('font').then((result) => {
        console.log('Loaded font:', result.font);
        if (result.font) {
            document.getElementById('fontSelect').value = result.font;
        }
    });
});
