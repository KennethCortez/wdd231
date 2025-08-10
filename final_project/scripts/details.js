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
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu && hamburgerIcon) {
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("open");

        const isOpen = navMenu.classList.contains("open");
        hamburger.setAttribute("aria-expanded", isOpen);

        // Change the hamburger icon based on the menu state
        hamburgerIcon.textContent = isOpen ? "✖" : "☰";
    });
}});
