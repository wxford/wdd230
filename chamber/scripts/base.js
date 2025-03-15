// Toggle Hamburger Menu
document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
});

// Update last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// Fetch Weather Data (Placeholder API - Replace with a real one)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("weather-data").textContent = "Sunny, 27°C";
});
document.getElementById("last-modified").textContent = document.lastModified;
