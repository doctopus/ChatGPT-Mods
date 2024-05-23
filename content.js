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
