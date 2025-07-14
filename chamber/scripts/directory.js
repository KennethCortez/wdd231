
    const membersContainer = document.getElementById("members");

    async function loadMembers() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();

        displayMembers(data);
    } catch (error) {
        console.error("Error loading members:", error);
    }
    }

    function displayMembers(members) {
    membersContainer.innerHTML = ""; // Clean the container

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
        <img src="images/${member.image}" alt="Logo de ${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        ${member.website ? `<a href="${member.website}" target="_blank">website</a>` : ""}
        `;

        membersContainer.appendChild(card);
    });
    }

  // change between grid and list view
    document.getElementById("gridView").addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
    });

    document.getElementById("listView").addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
    });

  // Load members when the script runs
    loadMembers();

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