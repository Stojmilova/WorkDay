/* ADMIN page */

'use strict';

let employeesData = [];

let page = 1;
let total = 0;
let itemsPerPage = 5;

$(document).ready(function () {

    // Web app's Firebase configuration-WorkDayApp
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
    const db = firebase.firestore();
    //db.settings({timestampsInSnapshots:true});

    db.collection('employees').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            //console.log(doc.data());                      
            employeesData.push(doc.data());
        })
        renderPagination(employeesData);
        renderEmployees(employeesData);
        //console.log(employeesData);
    });


});

function renderEmployees(employees) {

    let tbody = document.querySelector('#employees > tbody');

    employees.forEach((employee, i) => {

        if (i >= ((page - 1) * itemsPerPage) && i < (page * itemsPerPage)) {

            let tr = document.createElement('tr');
            tbody.appendChild(tr);

            let firstName = document.createElement('td');
            firstName.textContent = employee.FirstName;
            tr.appendChild(firstName);

            let lastName = document.createElement('td');
            lastName.textContent = employee.LastName;
            tr.appendChild(lastName);

            let dateOfBirth = document.createElement('td');
            dateOfBirth.textContent = employee.DateOfBirth;
            tr.appendChild(dateOfBirth);

            let department = document.createElement('td');
            department.textContent = employee.Department;
            tr.appendChild(department);

            let position = document.createElement('td');
            position.textContent = employee.Position;
            tr.appendChild(position);

            let dateOfHiring = document.createElement('td');
            dateOfHiring.textContent = employee.DateOfHiring;
            tr.appendChild(dateOfHiring);

            let salary = document.createElement('td');
            salary.textContent = employee.Salary;
            tr.appendChild(salary);

            let action = document.createElement('td');
            action.innerHTML = `  <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
                                    data-toggle="tooltip" title="" data-original-title="Edit"></i></a>
                                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
                                    data-toggle="tooltip" title="" data-original-title="Delete"></i></a>`
            tr.appendChild(action);

        }
    })

}

function renderPagination(employeesData) {
    total = Math.ceil(employeesData.length / itemsPerPage);

    let pg = document.querySelector('.page');
    pg.innerHTML = '';

    for (let i = 0; i < total; i++) {
        let span = document.createElement('span');
        span.setAttribute('class', 'page-item');
        span.innerHTML = `<a onclick="changePage(${i+1})">${i+1}</a>`;

        pg.appendChild(span);
    }
}

function changePage(pageNum) {
    page = pageNum;
    renderEmployees(employeesData);
}

//LOG OUT

$('#logOutForm').on('submit', function (e){
    
    e.preventDefault();

    firebase.auth().signOut()
    .then(function () {
        location.href = "../index.html";
    })
    .catch(function (error) {
        // An error happened
    });
})


//Search 

/* let usersRef = firebase.database().ref.child('employees').orderByChild('FirstName').equalTo('Olivia').on("value", function(snapshot) {
    console.log(snapshot.val());
    snapshot.forEach(function(data) {
        console.log(data.key);
    });
});
 */


/* let searchName;

let input = document.getElementById("search-input");
input.addEventListener('keyup', (event) => {
    searchName = event.target.value;
}); */

/* function searchEmployee() {

    let newEmployee = docs.filter((doc) => doc().FirstName.match(searchName))
    renderEmployees(newEmployee);

    /* page = 1;
    renderPagination(newBands);
    
} */




//SEND BIRTHDAY info
function sendBirthInfo() {
    var link = "mailto:me@example.com" +
        "?cc=myCCaddress@example.com" +
        "&subject=" + escape("Birthday Info") +
        "&body=" + escape(document.getElementById('birth-info').value);

    window.location.href = link;
}

//SEND ANIVERSARY info
function sendAniversaryInfo() {
    var link = "mailto:me@example.com" +
        "?cc=myCCaddress@example.com" +
        "&subject=" + escape("Aniversary info") +
        "&body=" + escape(document.getElementById('aniversary-info').value);

    window.location.href = link;
}