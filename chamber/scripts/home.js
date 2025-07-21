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

// ======= Weather API =======
const apiKey = "58b95c12ed390685693f1122e706c6fd";
const lat = 13.7167;
const lon = -89.7167;
const units = "metric";

async function getWeather() {
    const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    const [currentRes, forecastRes] = await Promise.all([
        fetch(currentURL),
        fetch(forecastURL)
    ]);

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    document.getElementById("current-temp").textContent =
        `Current temperature: ${currentData.main.temp.toFixed(1)} °C`;
    document.getElementById("weather-description").textContent =
        `Conditions: ${currentData.weather[0].description}`;

    // Filter for 12:00 PM forecast only
    const dailyForecasts = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
    const forecastDiv = document.getElementById("forecast");

    dailyForecasts.slice(0, 3).forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const temp = day.main.temp.toFixed(1);
        const desc = day.weather[0].description;

        const dayCard = document.createElement("div");
        dayCard.innerHTML = `<strong>${dayName}</strong>: ${temp} °C, ${desc}`;
        forecastDiv.appendChild(dayCard);
    });
}

getWeather();
// ======= End of Weather API =======

// ===== Load and display businesses from JSON =======
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("spotlight-container");

    fetch("data/members.json")
        .then((response) => {
            if (!response.ok) throw new Error("error loading JSON.");
            return response.json();
        })
        .then((data) => {

            const eligibleMembers = data.filter(member =>
                member.membership_level === "2" || member.membership_level === "3"
            );

            const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

            const numToShow = Math.floor(Math.random() * 2) + 2; // 2 o 3
            const selectedMembers = shuffled.slice(0, numToShow);

            selectedMembers.forEach(member => {
                const card = document.createElement("div");
                card.classList.add("spotlight-card");

                card.innerHTML = `
                    <h3>${member.name}</h3>
                    <img src="images/${member.image}" alt="Logo de ${member.name}" loading="lazy">
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Web:</strong> <a href="${member.website}" target="_blank">Visit</a></p>
                    <p><strong>Membership:</strong> ${member.membership_level === "3" ? "Gold" : "Silver"}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error when loading data:", error);
            container.innerHTML = "<p>We really sorry, we can't load the data.</p>";
        });
});
