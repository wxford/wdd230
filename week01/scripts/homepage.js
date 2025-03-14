document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const menuButton = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuButton.textContent = navMenu.classList.contains("active") ? "X" : "☰";
    });

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });
});
