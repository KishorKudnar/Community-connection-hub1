// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// Chatbot Functionality 
const chatWindow = document.getElementById('chat-window');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Toggle chat window visibility
function toggleChat() {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
}

// Send message when button is clicked or Enter is pressed
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Function to send a message
function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage('You', message);
        userInput.value = ''; // Clear the input field
        getBotResponse(message); // Call bot response
    }
}

// Function to add messages to the chat
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}

// Function to get a bot response
function getBotResponse(message) {
    let response;

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("what is the community connection hub")) {
        response = "The Community Connection Hub is a platform designed to bring communities together by offering tools to connect people with local events, discussions, resources, and volunteering opportunities.";
    } else if (lowerMessage.includes("purpose of the project")) {
        response = "The purpose of the Community Connection Hub is to strengthen local communities by providing a digital space for interaction, collaboration, and support.";
    } else if (lowerMessage.includes("unique selling points")) {
        response = "Unique selling points include a hyperlocal focus, AI-driven personalized recommendations, and gamification to enhance engagement.";
    } else if (lowerMessage.includes("benefits for the community")) {
        response = "Benefits include increased engagement, strengthening social bonds, and easy access to local services.";
    } else if (lowerMessage.includes("events")) {
        response = "Users can discover and join local events like community meetups, workshops, or neighborhood gatherings.";
    } else if (lowerMessage.includes("resource directory")) {
        response = "A curated list of resources such as local businesses, government services, and emergency contacts is available.";
    } else if (lowerMessage.includes("volunteer")) {
        response = "You can find volunteering opportunities in the volunteering section.";
    } else {
        response = "I'm here to help! Please ask about the what is the community connection hub ?, purpose of the project,unique selling points, benefits for the community, events, resource directory, volunteer.";
    }

    setTimeout(() => {
        addMessage('Bot', response); // Send the bot response
    }, 500); // Simulate a delay for a more realistic chat experience
}
