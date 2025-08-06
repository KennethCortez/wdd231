fetch('data/discover.json')
    .then(response => response.json())
    .then(data => {
    const container = document.getElementById('card-container');

    data.forEach(place => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="images/${place.image}" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn more</button>
        `;

        container.appendChild(card);
    });
    })
    .catch(error => {
    console.error('Error loading JSON data:', error);
    });

// Visit tracking script
const messageArea = document.getElementById('visit-message');

// Get current time
const now = Date.now();

// Check if there's a previous visit stored
const lastVisit = localStorage.getItem('lastVisit');

let message = '';

if (!lastVisit) {
  // First visit
    message = "Welcome! Let us know if you have any questions.";
} else {
    const previousTime = Number(lastVisit);
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const timeDifference = now - previousTime;
    const daysBetween = Math.floor(timeDifference / millisecondsInADay);

    if (daysBetween < 1) {
    message = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
    message = "You last visited 1 day ago.";
    } else {
    message = `You last visited ${daysBetween} days ago.`;
    }
}

// Display the message
messageArea.textContent = message;

// Update localStorage with the current visit time
localStorage.setItem('lastVisit', now);

document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector("footer p:nth-of-type(2)");
    if (footerText) {
        footerText.innerHTML = `WDD231 Class Project Kenneth Cortez 
        ©️${currentYear} Business Connect, Sonsonate, El Salvador`;
    }

    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.innerHTML = `Last Modified: ${formattedDate}`;
    }

// ======= Hamburger menu =======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);

    });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
    const now = new Date();
    timestampInput.value = now.toLocaleString();
    }
});