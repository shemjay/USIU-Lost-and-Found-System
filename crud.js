 // Import the functions you need from the SDKs you need
 import {initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import {getDatabase, set,ref} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
 import {getFirestore, doc, getDoc, getDocs, setDoc, collection,  addDoc, updateDoc, deleteDoc, deleteField, onSnapshot} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";


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
 const db = getFirestore(app); 
//Logout Feature


//References 
 let Itembox = document.getElementById("Itembox");
 let IDbox = document.getElementById("IDbox");
 let Descbox = document.getElementById("Descbox");
 let Lastseenbox = document.getElementById("Lastseenbox");
 let Uniquebox = document.getElementById("Uniquebox");
 let Typebox = document.getElementById("Typebox");
 let Contactbox =document.getElementById("Contactbox");

 let Createbtn = document.getElementById("Createbtn");
 let Readbtn = document.getElementById("Readbtn");
 let Updatebtn = document.getElementById("Updatebtn");
 let Deletebtn = document.getElementById("Deletebtn");

//Adding Document to Firestore with Auto ID

 async function AddDocument_AutoID(){
  var ref = collection(db,"Lost Items");

  const docRef = await addDoc(
    ref, {
      ItemName: Itembox.value,
      IDnumber: IDbox.value,
      ItemDescription: Descbox.value,
      LastSeenLocation: Lastseenbox.value,
      UniqueID: Uniquebox.value,
      ItemType: Typebox.value,
      ContactInfo: Contactbox.value
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

//Adding Document to Firestore with Custom ID
async function AddDocument_CustomID(){
  var ref = doc(db,"Lost Items", IDbox.value);

  await setDoc( // const docRef = await setDoc(
    ref, {
      ItemName: Itembox.value,
      IDnumber: IDbox.value,
      ItemDescription: Descbox.value,
      LastSeenLocation: Lastseenbox.value,
      UniqueID: Uniquebox.value,
      ItemType: Typebox.value,
      ContactInfo: Contactbox.value
    }
  )
  .then(()=> {
    alert("Data added successfully");
    // console.log("success");
  })
  .catch((error) => {
    alert("Unsuccessful operation, error: "+ error);
  });
  console.log("document id is: " +docRef.id());
 }


 //Getting a Document from Firestore with Custom ID
 async function GetADocument() {
  var ref = doc(db,"Lost Items", IDbox.value);
  const docSnap = await getDoc(ref);

  if(docSnap.exists()){
    Itembox.value = docSnap.data().ItemName;
    IDbox.value = docSnap.data().IDnumber;
    Descbox.value = docSnap.data().ItemDescription;
    Lastseenbox.value = docSnap.data().LastSeenLocation;
    Uniquebox.value = docSnap.data().UniqueID;
    Typebox.value = docSnap.data().ItemType;
    Contactbox.value =  docSnap.data().ContactInfo;
  }

  else{
    alert("No such document");
  }
 }

// Update Data from Firestore
async function updateFieldsInADocument() {
  var ref = doc(db,"Lost Items", IDbox.value);

  
   await updateDoc(ref, {
    ItemName: Itembox.value,
    IDnumber: IDbox.value,
    ItemDescription: Descbox.value,
    LastSeenLocation: Lastseenbox.value,
    UniqueID: Uniquebox.value,
    ItemType: Typebox.value,
    ContactInfo: Contactbox.value,
  })
    .then(() => {
      alert("Data updated successfully");
      // console.log("success");
    })
    .catch((error) => {
      alert("Unsuccessful operation, error: " + error);
    });
}

// Delete the data
    async function deleteDocument() {
      var ref = doc(db, "Lost Items", IDbox.value);
      const docSnap = await getDoc(ref);

      if (!docSnap.exists()) {
          alert("This document does not exist");
          return;
      }
      await deleteDoc(ref)
      .then(() => {
        alert(" Data deleted successfully");
      })
      .catch((error) => {
        alert("Unsuccessful operation, error: " + error);
      });
    }


 //Assign Events to the CRUD Buttons
//  Createbtn.addEventListener("click", AddDocument_AutoID); //Creat with Auto ID
 
 Createbtn.addEventListener("click", AddDocument_CustomID);     //Create with custom ID         
 Readbtn.addEventListener("click", GetADocument);
 Updatebtn.addEventListener("click", updateFieldsInADocument);
 Deletebtn.addEventListener("click", deleteDocument);





 