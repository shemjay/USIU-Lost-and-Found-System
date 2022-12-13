 // Import the functions you need from the SDKs you need
 import {initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import { getDatabase, ref, child, get, onValue} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
 import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
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
 const database = getDatabase();
 const auth = getAuth();

 //Card Variables
 const displayName = document.getElementById('displayName');
 const displayID = document.getElementById('displayID');
 const displayEmail = document.getElementById('displayEmail');
 const displayUsername = document.getElementById('displayUsername');
 const displayLogin = document.getElementById('displayLogin');

 let logout = document.getElementById('logout');
    //log out the user //
    logout.addEventListener('click', (e) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            alert('Signed out successfully!');
            window.location.href="login.html" 
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            
            alert(errorMessage);
        });
  
    });

    const databaseRef = ref(getDatabase());
    onAuthStateChanged(auth, async (user) => { 
        const snap = await get(databaseRef, `user/${user.uid}`);
        console.log(snap.val());
      
        if (snap.exists()) {
          displayName.innerText = "Currently logged in as: "  + user.email;
        displayID.innerText = "School ID: " + "660408"; //user.schoolID
          displayEmail.innerText = "Email: " + user.email;
          displayUsername.innerText = "User ID: " + user.uid;
          displayLogin.innerText = "Account Last Login: " + "12/09/22";
        }
      }); 

    

    // auth.onAuthStateChanged(user => {
    //     // console.log(user.email);
    //     displayName.innerText = "Currently logged in as: " + user.email;
    //     displayID.innerText = "School ID: " + user.schoolID;
    //     displayEmail.innerText = "Email: " + user.email;
    //     displayUsername.innerText = "Username: " + user.username;
    //     displayLogin.innerText = "Account Creation: " + user.last_login;
    // })
/////////////////////////////// Adding Data to the Table ////////////////////////////

var tbody = document.getElementById('tbody1');
function AddItemToTable(ItemName, IDnumber, ItemDescription, LastSeenLocation, UniqueID, ItemType, ContactInfo) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");

  td1.classList += "ItemNameField";
  td2.classList += "IDnumberField";
  td3.classList += "ItemDescriptionField";
  td4.classList += "LastSeenLocationField";
  td5.classList += "UniqueIDField";
  td6.classList += "ItemTypeField";
//   td7.classList += "ContactInfoField";

  td1.innerHTML = ItemName;
  td2.innerHTML = IDnumber;
  td3.innerHTML = ItemDescription;
  td4.innerHTML = LastSeenLocation;
  td5.innerHTML = UniqueID;
  td6.innerHTML = ItemType;
  td7.innerHTML = ContactInfo;

  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);


  tbody.appendChild(tr);

}

  //////Add Records to a Table //////////
  function AddAllItemsToTable(Items) {
    tbody.innerHTML = ""
    Items.forEach(element => {
      AddItemToTable(element.ItemName, element.IDnumber, element.ItemDescription, element.LastSeenLocation, element.UniqueID, element.ItemType, element.ContactInfo,);
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

    var SearchBar = document.getElementById("SearchBar");
    var SearchBtn = document.getElementById("SearchBtn");
    var Category = document.getElementById("CategorySelected");
    var tbody1 = document.getElementById("tbody1");

    function searchTable(Category) {

        var filter = SearchBar.value.toUpperCase();
        var tr = tbody1.getElementsByTagName("tr");
        var found;

        for (let i = 0; i < tr.length; i++) {

            var td = tr[i].getElementsByClassName(Category);

        for (let j = 0; j < td.length; j++) {
            if(td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found=true;
            }
            
        }

        if(found) {
            tr[i].style.display = "";
            found = "false";
        }

        else {
            tr[i].style.display = "none";
        }
            
        }
    }


    function searchTableByExactValues(Category) {

        var filter = SearchBar.value.toUpperCase();
        var tr = tbody1.getElementsByTagName("tr");
        var found;

        for (let i = 0; i < tr.length; i++) {

            var td = tr[i].getElementsByClassName(Category);

        for (let j = 0; j < td.length; j++) {
            if(td[j].innerHTML.toUpperCase() == filter) {
                found=true;
            }
            
        }

        if(found) {
            tr[i].style.display = "";
            found = "false";
        }

        else {
            tr[i].style.display = "none";
        }
            
        }
    }

    SearchBtn.addEventListener("click", function() {
        // console.log("button clicked!");
        if(SearchBar.value=="") {
            searchTable("ItemNameField");
        }

        else if(Category.value ==1)
        searchTable("ItemNameField");

        else if(Category.value ==2)
        searchTableByExactValues("IDnumberField");

        else if(Category.value ==3)
        searchTable("ItemDescriptionField");

        else if(Category.value ==4)
        searchTable("LastSeenLocationField");

        else if(Category.value ==5)
        searchTable("UniqueIDField");

        else if(Category.value ==6)
        searchTableByExactValues("ItemTypeField");

        else if(Category.value ==7)
        searchTable("ContactInfoField");
      });



    window.onload = GetAllDataRealtime();