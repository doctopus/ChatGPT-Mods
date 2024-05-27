function applyFontSettings(font, fontSize) {
    let styleElement = document.getElementById('dynamic-font-style');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-font-style';
        document.head.appendChild(styleElement);
    }
    styleElement.innerHTML = `
    div.w-full, #prompt-textarea {
      font-family: ${font} !important;
      font-size: ${fontSize}px !important;
    }
  `;
    console.log('Applied font:', font);
    console.log('Applied font size:', fontSize);
}

// Function to observe changes and reapply the font settings
function observeFontChanges(font, fontSize) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                applyFontSettings(font, fontSize);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Get the saved font settings from storage and apply them
browser.storage.sync.get(['font', 'fontSize']).then((result) => {
    if (result.font && result.fontSize) {
        console.log('Retrieved font:', result.font);
        console.log('Retrieved font size:', result.fontSize);
        applyFontSettings(result.font, result.fontSize);
        observeFontChanges(result.font, result.fontSize); // Start observing changes
    } else {
        console.log('No font settings found in storage.');
    }
});

document.addEventListener('keydown', function(event) {
    // Check if the Enter key is pressed without the Shift key
    if (event.key === 'Enter' && !event.shiftKey) {
        // Prevent the default action to avoid any issues
        event.preventDefault();
        // Find the submit button using its data-testid attribute
        let submitButton = document.querySelector('button[data-testid="fruitjuice-send-button"]');
        if (submitButton) {
            submitButton.click();
        }
    }
});
