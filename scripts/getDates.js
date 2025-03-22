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