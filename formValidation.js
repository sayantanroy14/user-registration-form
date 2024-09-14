function validateUsername() {
    let username = document.getElementById('username').value;
    let error = document.getElementById('usernameError');
    if (username === '') {
        error.textContent = 'Username is required';
    } else {
        error.textContent = '';
    }
}

function validateEmail() {
    let email = document.getElementById('email').value;
    let error = document.getElementById('emailError');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error.textContent = 'Invalid email address';
    } else {
        error.textContent = '';
    }
}

function validatePassword() {
    let password = document.getElementById('password').value;
    let error = document.getElementById('passwordError');
    if (password.length < 6) {
        error.textContent = 'Password must be at least 6 characters long';
    } else {
        error.textContent = '';
    }
}

function validateConfirmPassword() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let error = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        error.textContent = 'Passwords do not match';
    } else {
        error.textContent = '';
    }
}

function validatePhoneNumber() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    let error = document.getElementById('phoneNumberError');
    if (!/^\d{10}$/.test(phoneNumber)) {
        error.textContent = 'Phone number must be exactly 10 digits';
    } else {
        error.textContent = '';
    }
}

function validateAddress() {
    let address = document.getElementById('address').value;
    let error = document.getElementById('addressError');
    if (address === '') {
        error.textContent = 'Address is required';
    } else {
        error.textContent = '';
    }
}

function validateBirthdate() {
    let birthdate = document.getElementById('birthdate').value;
    let error = document.getElementById('birthdateError');
    if (birthdate === '') {
        error.textContent = 'Birthdate is required';
    } else {
        error.textContent = '';
    }
}

function validateGender() {
    let gender = document.getElementById('gender').value;
    let error = document.getElementById('genderError');
    if (gender === '') {
        error.textContent = 'Please select a gender';
    } else {
        error.textContent = '';
    }
}

function validateForm() {
    // Run all field validation functions
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validatePhoneNumber();
    validateAddress();
    validateBirthdate();
    validateGender();

    // Check if there are any errors present in the form
    let errors = document.getElementsByClassName('error');
    let valid = true;
    for (let i = 0; i < errors.length; i++) {
        if (errors[i].textContent !== '') {
            valid = false;
            break;
        }
    }

    // If no errors, show success message
    if (valid) {
        alert('User Registered');
    }
}
