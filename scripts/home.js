document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector("footer p:nth-of-type(1)");
    if (footerText) {
        footerText.innerHTML = `©️${currentYear} Kenneth Cortez, Sonsonate, El Salvador`;
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

// ======= Hamburger menu and blur effect =======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const background = document.querySelector("main");

if (hamburger && navMenu && background) {
    hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);

    background.classList.toggle("blur", isOpen);
    });
    }
});