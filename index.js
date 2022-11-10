        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

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

                    alert('Error!');
                    // ..
                });
        });