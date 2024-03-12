// Function to calculate the time difference between the target date and the current date
function getTimeDifference(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

// Function to update the countdown timer
function updateCountdown(targetDate) {
    const countdown = document.getElementById('countdown');

    // Get the time difference
    const { days, hours, minutes, seconds } = getTimeDifference(targetDate);

    // Display the time difference
    countdown.innerHTML = `
        <div class="countdown-item">
            <span class="countdown-value">${days}</span>
            <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">${hours}</span>
            <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">${minutes}</span>
            <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">${seconds}</span>
            <span class="countdown-label">Seconds</span>
        </div>
    `;
}

// Function to start the countdown
function startCountdown(targetDate) {
    // Update the countdown immediately
    updateCountdown(targetDate);

    // Update the countdown every second
    setInterval(() => {
        updateCountdown(targetDate);
    }, 1000);
}

// Set the target date (April 4th, 2024 at 10:00 AM)
const targetDate = new Date('April 4, 2024 10:00:00').getTime();

// Start the countdown
startCountdown(targetDate);