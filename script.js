//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    // Get the user-provided text and delay values
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    // Function to introduce a delay using async/await
    function delayText(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Clear the output div before displaying new text
    document.getElementById('output').textContent = '';

    // Wait for the specified delay before showing the text
    await delayText(delay);

    // Display the text in the output div
    document.getElementById('output').textContent = text;
});
