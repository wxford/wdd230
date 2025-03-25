document.addEventListener('DOMContentLoaded', function () {
    // Password matching validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordMatchMessage = document.getElementById('passwordMatchMessage');

    function validatePassword() {
        if (password.value !== confirmPassword.value) {
            passwordMatchMessage.textContent = 'Passwords do not match!';
            passwordMatchMessage.style.color = 'var(--error-color)';
            password.focus();
            password.value = '';
            confirmPassword.value = '';
            return false;
        } else {
            passwordMatchMessage.textContent = '';
            return true;
        }
    }

    confirmPassword.addEventListener('blur', validatePassword);

    // Range value display
    const rating = document.getElementById('rating');
    const ratingValue = document.getElementById('ratingValue');

    function updateRatingValue() {
        ratingValue.textContent = rating.value;
    }

    rating.addEventListener('input', updateRatingValue);
    rating.addEventListener('change', updateRatingValue);

    // Form submission validation
    const form = document.getElementById('accountForm');

    form.addEventListener('submit', function (event) {
        if (!validatePassword()) {
            event.preventDefault();
        }
    });
});