//Firestore CRUD //
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, set, ref, push, child } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js"; //try changing to firestore if problems arise maybe

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
  let signup = document.getElementById('signup');
  let logout = document.getElementById('logout');


submitBtn.addEventListener('click',(e) => {
    var itemName = document.getElementById('itemName').value;
    var idNumber = document.getElementById('idNumber').value;
    var itemDesc = document.getElementById('itemDesc').value;
    var lastSeen = document.getElementById('lastSeen').value;
    var unique = document.getElementById('unique').value;

    const userId = push(child(ref(database), 'Lost-Items')).key;

    set(ref(database, 'Lost-Items' + userId), {
      itemName: itemName,
      idNumber: idNumber,
      itemDesc : itemDesc,
      lastSeen : lastSeen,
      unique : unique,
    });
    console.log('success');
    alert('New entry successfully created');
});