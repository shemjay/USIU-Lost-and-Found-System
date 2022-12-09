const form = document.getElementById('form');
const email = document.getElementById('signup-email');
const username = document.getElementById('signup-user');
const schoolID = document.getElementById('signup-id');
const password = document.getElementById('signup-pwd');

signup.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = signup-email.value.trim();
    const usernameValue = signup-user.value.trim();
    const schoolValue = signup-id.value.trim();
    const passwordValue = signup-pwd.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }   else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide valid school email ending in @usiu.ac.ke');
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be longer than 8 characters');
    } else {
        setSuccess(password);
    }

    if(schoolValue === '') {
        setError(password, 'School ID required');
    } else if (schoolValue.length > 6); {
        setError(schoolID, 'school ID must be less than 6 characters');
    }
    

};


