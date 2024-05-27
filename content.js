function applyFont(font) {
    let styleElement = document.getElementById('dynamic-font-style');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-font-style';
        document.head.appendChild(styleElement);
    }
    styleElement.innerHTML = `
    div.w-full, #prompt-textarea {
      font-family: ${font} !important;
    }
  `;
    console.log('Applied font:', font);
}

// Function to observe changes and reapply the font
function observeFontChanges(font) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                applyFont(font);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Get the saved font from storage and apply it
browser.storage.sync.get('font').then((result) => {
    if (result.font) {
        console.log('Retrieved font:', result.font);
        applyFont(result.font);
        observeFontChanges(result.font); // Start observing changes
    } else {
        console.log('No font found in storage.');
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
