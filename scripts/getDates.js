// Insert current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Insert last modified date
document.getElementById("lastModified").textContent = document.lastModified;
// localStorage for Page Visits Counter
if (localStorage.getItem('visitCount')) {
    let count = parseInt(localStorage.getItem('visitCount'));
    count += 1;
    localStorage.setItem('visitCount', count);
    document.getElementById('visit-count').textContent = count;
} else {
    localStorage.setItem('visitCount', 1);
    document.getElementById('visit-count').textContent = 1;
}