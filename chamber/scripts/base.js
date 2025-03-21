// Toggle Hamburger Menu
document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
});

// Update last modified date
document.getElementById("last-modified").textContent = `Last Modified: ${document.lastModified}`;

// Fetch Weather Data (Placeholder API - Replace with a real one)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("weather-data").textContent = "Sunny, 27°C";
});

// Function to calculate days between visits
function displayDaysBetweenVisits() {
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    if (lastVisit) {
        const daysBetween = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysBetween === 0) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', currentTime);
}

// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
const imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadImages(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, imageOptions);

    images.forEach((img) => {
        observer.observe(img);
    });
} else {
    images.forEach((img) => {
        loadImages(img);
    });
}

// Update footer with current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;

// Call the function to display days between visits
displayDaysBetweenVisits();