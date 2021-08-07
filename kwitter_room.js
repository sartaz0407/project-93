var firebaseConfig = {
      apiKey: "AIzaSyAnhHwfYc3Cp3nrrQEklxFZRkdrseLNUbA",
      authDomain: "kwitter-e0fa5.firebaseapp.com",
      databaseURL: "https://kwitter-e0fa5-default-rtdb.firebaseio.com",
      projectId: "kwitter-e0fa5",
      storageBucket: "kwitter-e0fa5.appspot.com",
      messagingSenderId: "585797431888",
      appId: "1:585797431888:web:d0b15b27352c2523a69755",
      measurementId: "G-11YMPXHKCC"
    };
      firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
