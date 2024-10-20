// gamification.js

// User profile data
let points = 0;
let level = 1;
const badgeContainer = document.getElementById('badge-container');
const badges = [];

// Function to handle participation in activities
function participate(activity, pointsEarned) {
    // Update user points
    points += pointsEarned;
    document.getElementById('user-points').textContent = points;

    // Check if user levels up
    if (points >= 100 && level === 1) {
        levelUp();
    } else if (points >= 200 && level === 2) {
        levelUp();
    }

    // Award badges based on activity
    awardBadge(activity);

    alert(`You earned ${pointsEarned} points for participating in ${activity}!`);
}

// Function to level up user
function levelUp() {
    level += 1;
    document.getElementById('user-level').textContent = level;
    alert(`Congratulations! You've reached level ${level}!`);
}

// Function to award badges based on activity
function awardBadge(activity) {
    let badgeMessage;
    switch (activity) {
        case 'Volunteer Event':
            badgeMessage = 'Community Helper';
            break;
        case 'Workshop':
            badgeMessage = 'Knowledge Seeker';
            break;
        case 'Discussion':
            badgeMessage = 'Active Participant';
            break;
    }

    // If the badge is not already earned, add it
    if (!badges.includes(badgeMessage)) {
        badges.push(badgeMessage);
        const badgeElement = document.createElement('div');
        badgeElement.classList.add('badge');
        badgeElement.textContent = badgeMessage;
        badgeContainer.appendChild(badgeElement);
    }
}
