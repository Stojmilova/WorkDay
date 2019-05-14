 'use strict';

 $(document).ready(function () {
 	//console.log( "ready!" );
 });

 db.collection('employees').get().then((snapshot) => {
 	snapshot.docs.forEach(doc => {
 		console.log(doc.data());
 	});
 })

 //SEND BIRTHDAY info
 function sendBirthInfo() {
 	var link = "mailto:me@example.com" + //admin-email
 		"?cc=myCCaddress@example.com" +
 		"&subject=" + escape("This is my subject") +
 		"&body=" + escape(document.getElementById('birth-info').value);

 	window.location.href = link;
 }

 //SEND ANIVERSARY info
 function sendAniversaryInfo() {
 	var link = "mailto:me@example.com" +
 		"?cc=myCCaddress@example.com" +
 		"&subject=" + escape("This is my subject") +
 		"&body=" + escape(document.getElementById('aniversary-info').value);

 	window.location.href = link;
 }

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