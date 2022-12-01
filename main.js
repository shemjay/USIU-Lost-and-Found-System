// Navigation section //
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

// //variables declaration
// const form = document.querySelector('form');
// const emailField = form.querySelector('.emailField');
// const emailInput = emailField.querySelector('.email'); //<--
// const usernameField = form.querySelector('.usernameField');
// const usernameInput = usernameField.querySelector('username');
// const schoolField = form.querySelector('.schoolField');
// const schoolInput = schoolField.querySelector('school');
// const passwordField = form.querySelector('.passwordField');
// const passwordInput = passwordField.querySelector('password');


// //Email validation
// function checkEmail() {
// const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
// if (!emailInput.value.match(emaiPattern)) { //<--
//   return emailField.classList.add("invalid"); //<-- 
// }
// emailField.classList.remove("invalid"); //remove invalid class if email value does not match 
// }
// //Calling function on form submit
// form.addEventListener('submit', (e) => {
//   e.preventDefault(); //Preventing form submit
//   checkEmail();
// });
