    //FIREBASE AUTH
    // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
    import {getDatabase, set,ref} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAalz5fFuOOG6_EZVFIO-hJRA2Sw1Yyg2A",
      authDomain: "lost-and-found-system-67568.firebaseapp.com",
      databaseURL: "https://lost-and-found-system-67568-default-rtdb.firebaseio.com",
      projectId: "lost-and-found-system-67568",
      storageBucket: "lost-and-found-system-67568.appspot.com",
      messagingSenderId: "32608786023",
      appId: "1:32608786023:web:6aea01187ecb53ce6a66c2"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    let signup = document.getElementById('signup');
    let logout = document.getElementById('logout');


  //Signup section
  signup.addEventListener('click',(e) => {
      var username = document.getElementById('signup-user').value;
      var email = document.getElementById('signup-email').value;
      var schoolID = document.getElementById('signup-id').value;
      var password = document.getElementById('signup-pwd').value;
      
          createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;

                  set(ref(database, 'user/' + user.id),{
                      username: username,
                      email: email
                  })
                  alert('User Created!');
                  // ...
              })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;

                  alert('Error please try again');
                  // ..
              });
      });

    //log out the user //
    logout.addEventListener("click", (e) => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          alert("Signed out successfully!");
          // window.location.href="login.html" //
        })
        .catch((error) => {
          // An error happened.
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);
        });
    });

      


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















