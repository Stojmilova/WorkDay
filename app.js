 /* OPEN page */

 'use strict';

 $(document).ready(function () {

   var firebaseConfig = {
     apiKey: "AIzaSyAz_u8o53-T3FBCwF-Yy8qiBhjThFBcMgk",
     authDomain: "workday-firestore.firebaseapp.com",
     databaseURL: "https://workday-firestore.firebaseio.com",
     projectId: "workday-firestore",
     storageBucket: "workday-firestore.appspot.com",
     messagingSenderId: "580442966710",
     appId: "1:580442966710:web:800557cbc6c9aaf0"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   var Auth = firebase.auth();
   var dbRef = firebase.database();
   var contactsRef = dbRef.ref('contacts')
   var usersRef = dbRef.ref('users')
   var auth = null;

 });

 //LOGIN

 $('#loginForm').on('submit', function (e) {

   e.preventDefault();

   if ($('#loginEmail').val() != '' && $('#loginPassword').val() != '') {
     var data = {
       email: $('#loginEmail').val(),
       password: $('#loginPassword').val()
     };
     firebase.auth().signInWithEmailAndPassword(data.email, data.password)
       .then(function (authData) {

         if (data.email == "linda.m@gmail.com" && data.password == "Linda123") {

           location.href = "User-Admin/admin.html";

         } else {

           location.href = "User-Employee/employee.html";
         }

       })
       .catch(function (error) {

         console.log("Login Failed!", error);

       });
   }
 });

 //READ MORE button
 
 let btnReadMore = document.getElementById("btnRead");

 function readMore() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("btnRead");

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
 btnReadMore.addEventListener('click', readMore);