const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pssword = document.getElementById('password');
const password2 = document.getElementById('confirm-password');

// Show error
const showError = (element, message) => {
    const formControl = element.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
};

// Show success
const showSuccess = (element) => {
    const formControl = element.parentElement;
    formControl.className = 'form-control success';
};

// Check valid email
const checkEmail = (element) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(element.value.trim()))
        showSuccess(element)
    else showError(element, 'Email is not valid')
};

// Check fields
const checkRequired = (eleArr) => {
    eleArr.forEach(el => {
        if (el.value.trim() === '') showError(el, `${getFieldName(el)} is required`);
        else showSuccess(el)
    })
};

// Check length
const checkLength = (element, min, max) => {
    // element.value.length < min ? showError(element, `${getFieldName(element)} must be at least ${min} characters`) ?
    //     element.value.length > max : showError(element, `${getFieldName(element)} must be no more than ${max} characters`) :
    //     showSuccess(element);

    if (element.value.length < min) showError(element, `${getFieldName(element)} must be at least ${min} characters`)
    else if (element.value.length > max) showError(element, `${getFieldName(element)} must be no more than ${max} characters`)
    else showSuccess(element)
};

// Check Password match
const checkPassword = (password, password2) => {
    if (password.value !== password2.value) showError(password2, 'Passwords do not match')
};

// get field name
const getFieldName = input => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};


// Form functions
const submit = (e) => {
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 16);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPassword(password, password2);
    e.preventDefault()
};

// Form event listener
form.addEventListener('submit', submit);



