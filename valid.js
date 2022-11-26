const signup = document.getElementById('signup');
const email = document.getElementById('signup-email');
const username = document.getElementById('signup-user');
const schoolID = document.getElementById('signup-id');
const password = document.getElementById('signup-pwd');

signup.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (elemnt, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const validateInputs = () => {
    const emailValue = signup-email.value.trim();
    const usernameValue = signup-user.value.trim();
    const schoolValue = signup-id.value.trim();
    const passwordValue = signup-pwd.value.trim();

    if(usernameValue === '') {


    }
};

