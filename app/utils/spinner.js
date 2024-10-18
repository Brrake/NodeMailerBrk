module.exports.startSpinner= async () => {
    const spinnerChars = ['|', '/', '-', '\\'];
    let index = 0;

    const intervalId = setInterval(() => {
        process.stdout.write(`\r${spinnerChars[index]}`); // Update spinner
        index = (index + 1) % spinnerChars.length; // Loop through spinner characters
    }, 100); // Update spinner every 100ms

    return intervalId; // Return the interval ID to stop later
}