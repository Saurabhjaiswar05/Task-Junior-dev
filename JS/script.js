document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phoneNumber = document.getElementById('phoneNumber').value.trim();
    let password = document.getElementById('password').value.trim();
    
    let isValid = true;

    if (firstName === "") {
        document.getElementById('firstNameError').textContent = "First Name is required";
        isValid = false;
    }

    if (lastName === "") {
        document.getElementById('lastNameError').textContent = "Last Name is required";
        isValid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = "Enter a valid email";
        isValid = false;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        document.getElementById('phoneError').textContent = "Enter a valid number";
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters";
        isValid = false;
    }

    if (isValid) {
        let formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        }
        console.log(formData) // u can see the form data in console
        alert('Form submitted successfully!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
    const re = /^\d{10}$/;
    return re.test(String(phoneNumber));
}
