 // OPEN page

 'use strict';

 firebase.auth().onAuthStateChanged(function (user) {
   if (user) {
     // User is signed in.
     document.getElementById('header').style.display = "none";
   } else {
     // No user is signed in.
     document.getElementById('header').style.display = "block";
   }
 });

 function login() {

   let userEmail = document.getElementById('email-field').value;
   let userPassword = document.getElementById('password-field').value;


   firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     window.alert("Error:" + errorMessage);
     // ...
   });
   


 //READ MORE button
 function readMore() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("myBtn");

   if (dots.style.display === "none") {
     dots.style.display = "inline";
     btnText.innerHTML = "Read more";
     moreText.style.display = "none";
   } else {
     dots.style.display = "none";
     btnText.innerHTML = "Read less";
     moreText.style.display = "inline";
   }
 }

 /* $(document).ready(function () {
    //Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyAz_u8o53-T3FBCwF-Yy8qiBhjThFBcMgk",
      authDomain: "workday-firestore.firebaseapp.com",
      databaseURL: "https://workday-firestore.firebaseio.com",
      projectId: "workday-firestore",
      storageBucket: "workday-firestore.appspot.com",
      messagingSenderId: "580442966710",
      appId: "1:580442966710:web:800557cbc6c9aaf0"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    //db.settings({ timestampsInSnapshots: true })

    db.collection('employees').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
      });
    })
  });
  */


 /*
  			// Activate tooltip
           $('[data-toggle="tooltip"]').tooltip();

           // Select/Deselect checkboxes
           var checkbox = $('table tbody input[type="checkbox"]');
           $("#selectAll").click(function () {
               if (this.checked) {
                   checkbox.each(function () {
                       this.checked = true;
                   });
               } else {
                   checkbox.each(function () {
                       this.checked = false;
                   });
               }
           });
           checkbox.click(function () {
               if (!this.checked) {
                   $("#selectAll").prop("checked", false);
               }
           });
 
 */