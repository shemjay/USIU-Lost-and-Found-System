 // Import the functions you need from the SDKs you need
 import {initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
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
 const db = getFirestore(app); //before const db = getFirestore(app);

/////////////////////////////// Adding Data to the Table ////////////////////////////

var tbody = document.getElementById('tbody1');
function AddItemToTable(ItemName, IDnumber, ItemDescription, LastSeenLocation, UniqueID, ItemType) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");


  td1.innerHTML = ItemName;
  td2.innerHTML = IDnumber;
  td3.innerHTML = ItemDescription;
  td4.innerHTML = LastSeenLocation;
  td5.innerHTML = UniqueID;
  td6.innerHTML = ItemType;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);

  tbody.appendChild(tr);

}

  //////Add Records to a Table //////////
  function AddAllItemsToTable(Items) {
    tbody.innerHTML = ""
    Items.forEach(element => {
      AddItemToTable(element.ItemName, element.IDnumber, element.ItemDescription, element.LastSeenLocation, element.UniqueID, element.ItemType);
    });
}


///////////////////Getting all the data ////////////////////////

    async function GetAllDataOnce() {
      const querySnapshot = await getDocs(collection(db, "Lost Items"));

      var  items = [];

      querySnapshot.forEach(doc => {
        items.push(doc.data());
      });

      AddAllItemsToTable(items);
    }

    ///Add Data in real time ///
    async function GetAllDataRealtime() {
      const dbRef = (collection(db, "Lost Items"));

      onSnapshot(dbRef,(querySnapshot) => {
          var  items = [];

          querySnapshot.forEach(doc => {
            items.push(doc.data());
          });
          AddAllItemsToTable(items);
      })

    }

    window.onload = GetAllDataRealtime();