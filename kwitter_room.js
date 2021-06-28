
//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCokPZm498BjDXsrILfxqwZPpV-fYp5IHM",
      authDomain: "classtest-59446.firebaseapp.com",
      projectId: "classtest-59446",
      storageBucket: "classtest-59446.appspot.com",
      messagingSenderId: "1022672505721",
      appId: "1:1022672505721:web:b828f1641280858b747da8",
      measurementId: "G-0GB9CYDH15"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
