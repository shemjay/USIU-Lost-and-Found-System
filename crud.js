 // Import the functions you need from the SDKs you need
 import {initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import {getFirestore, doc, getDoc, setDoc, collection,  addDoc, updateDoc, deleteDoc, deleteField} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";


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
 // Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app); //before const db = getFirestore(app);

//References 
 let Itembox = document.getElementById("Itembox");
 let IDbox = document.getElementById("IDbox");
 let Descbox = document.getElementById("Descbox");
 let Lastseenbox = document.getElementById("Lastseenbox");
 let Uniquebox = document.getElementById("Uniquebox");
 let Typebox = document.getElementById("Typebox");

 let Createbtn = document.getElementById("Createbtn");
 let Readbtn = document.getElementById("Readbtn");
 let Updatebtn = document.getElementById("Updatebtn");
 let Deletebtn = document.getElementById("Deletebtn");

//Adding Document to Firestore with Auto ID

//  async function AddDocument_AutoID(){
//   var ref = collection(db,"Lost Items");

//   const docRef = await addDoc(
//     ref, {
//       ItemName: Itembox.value,
//       IDnumber: IDbox.value,
//       ItemDescription: Descbox.value,
//       LastSeenLocation: Lastseenbox.value,
//       UniqueID: Uniquebox.value,
//       ItemType: Typebox.value
//     }
//   )
//   .then(()=> {
//     alert("Data added successfully");
//     // console.log("success");
//   })
//   .catch((error) => {
//     alert("Unsuccessful operation, error: "+ error);
//   });
//  }

//Adding Document to Firestore with Custom ID
async function AddDocument_CustomID(){
  var ref = doc(db,"Lost Items", IDbox.value);

  const docRef = await setDoc(
    ref, {
      ItemName: Itembox.value,
      IDnumber: IDbox.value,
      ItemDescription: Descbox.value,
      LastSeenLocation: Lastseenbox.value,
      UniqueID: Uniquebox.value,
      ItemType: Typebox.value
    }
  )
  .then(()=> {
    alert("Data added successfully");
    // console.log("success");
  })
  .catch((error) => {
    alert("Unsuccessful operation, error: "+ error);
  });
 }


 //Getting a Document from Firestore with Custom ID
 async function GetADocument() {
  var ref = doc(db,"Lost Items", IDbox.value);
  const docSnap = await getDoc(ref);

  if(docSnap.exists()){
    Itembox.value = docSnap.data().ItemName;
    IDbox.value = docSnap.data().IDnumber;
    Descbox.value = docSnap.data().ItemDesc;
    Lastseenbox.value = docSnap.data().LastSeenLocation;
    Uniquebox.value = docSnap.data().UniqueID;
    Typebox.value = docSnap.data().ItemType;
  }

  else{
    alert("No such document");
  }
 }

 //Assign Events to the CRUD Buttons
//  Createbtn.addEventListener("click", AddDocument_AutoID); //Creat with Auto ID


 Createbtn.addEventListener("click", AddDocument_CustomID); //Creat with Custom ID
 Readbtn.addEventListener("click", GetADocument);
