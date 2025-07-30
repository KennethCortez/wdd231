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
    const params = new URLSearchParams(window.location.search);
    const confirmationList = document.getElementById('confirmation-list');

    const fields = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Mobile Phone", key: "mobilePhone" },
    { label: "Organization Name", key: "orgName" },
    { label: "Form Submitted At", key: "timestamp" }
    ];

    fields.forEach(field => {
    const value = params.get(field.key);
    if (value) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${field.label}:</strong> ${value}`;
        confirmationList.appendChild(li);
    }
    });
});


