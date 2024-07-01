const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isValid = checkInputs();

    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
    }
});

function checkInputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    let isValid = true;

    if (nameValue === '') {
        setErrorFor(nameInput, 'Name cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(nameInput);
    }

    if (emailValue === '') {
        setErrorFor(emailInput, 'Email cannot be blank');
        isValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailInput, 'Email is not valid');
        isValid = false;
    } else {
        setSuccessFor(emailInput);
    }

    if (passwordValue === '') {
        setErrorFor(passwordInput, 'Password cannot be blank');
        isValid = false;
    } else if (passwordValue.length < 6) {
        setErrorFor(passwordInput, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        setSuccessFor(passwordInput);
    }

    if (confirmPasswordValue === '') {
        setErrorFor(confirmPasswordInput, 'Please confirm your password');
        isValid = false;
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPasswordInput, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccessFor(confirmPasswordInput);
    }

    return isValid;
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    formGroup.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
