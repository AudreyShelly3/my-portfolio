const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTools = document.getElementById("modalTools");
const closeModal = document.getElementById("closeModal");

const projectButtons = document.querySelectorAll(".project-btn");

const typingText = document.getElementById("typing-text");
const roles = [
    "IT Graduate",
    "Aspiring Cybersecurity Analyst",
    "Web Development Learner",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 1200;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

projectButtons.forEach(button => {
    button.addEventListener("click", function () {
        const title = this.getAttribute("data-title");
        const description = this.getAttribute("data-description");
        const tools = this.getAttribute("data-tools");

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalTools.textContent = "Tools Used: " + tools;

        modal.classList.add("show");
    });
});

closeModal.addEventListener("click", function () {
    modal.classList.remove("show");
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    formMessage.textContent = `Thank you, ${name}! Your message has been received.`;

    contactForm.reset();
});