 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

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

//  const firebase = require("firebase");
 // Required for side-effects
//  require("firebase/firestore");

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);

   try {
     const docRef = await addDoc(collection(db, "users"), {
       first: "Ada",
       last: "Lovelace",
       born: 1815
     });
     console.log("Document written with ID: ", docRef.id);
   } catch (e) {
     console.error("Error adding document: ", e);
   }
 