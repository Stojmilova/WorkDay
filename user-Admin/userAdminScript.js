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
        daysUntil(employeesData)
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

$('#logOutForm').on('submit', function (e) {

    e.preventDefault();

    firebase.auth().signOut()
        .then(function () {
            location.href = "../index.html";
        })
        .catch(function (error) {
            // An error happened
        });
})

//DISPLAY Birthday-employee

function daysUntil(employeesData) {

    let birthDates = [];

    for (let i in employeesData) {
        let data = employeesData[i].DateOfBirth;
        birthDates.push(data);
    }
    for (let i in birthDates) {
        var birthday = moment(birthDates[i]);
        var today = moment().format("YYYY-MM-DD");

        let divBirthday = document.getElementById('birthday-display');
        let textareaBirthday = document.getElementById('birthday-info');
        let headingInfo = document.createElement('div');
        divBirthday.appendChild(headingInfo);

        let divAllBirthdays = document.getElementById('upcommingBirthdays');
        let allBirthdays = document.createElement('div');
        divAllBirthdays.appendChild(allBirthdays);

        // calculate age of the person
        var age = moment(today).diff(birthday, 'years');
        moment(age).format("YYYY-MM-DD");
        //console.log(`${employeesData[i].FirstName}`, age);

        var nextBirthday = moment(birthday).add(age, 'years');
        moment(nextBirthday).format("YYYY-MM-DD");


        /* added one more year in case the birthday has already passed
        to calculate date till next one. */
        if (nextBirthday.isSame(today)) {

            textareaBirthday.innerHTML = `Today, our colleague ${employeesData[i].FirstName}  ${employeesData[i].LastName} has a birthday.  ***Happy birthday to my incredibly awesome colleague! Wishing you a joyous and fun celebration and a remarkable promotion this year!*** We still don’t know how old you are. I guess that only You and Human resources know your true age. HAPPY BIRTHDAY! Have a nice day.Your Workable!`;
          
        } else {

            nextBirthday = moment(birthday).add(age + 1, 'years');
            allBirthdays.innerHTML = `${employeesData[i].Position} ${employeesData[i].FirstName} ${employeesData[i].LastName} => ${ nextBirthday.diff(today, 'days')} days until next birthday`;

        }
    }
}

//SEND BIRTHDAY info
function sendBirthInfo() {
    var link = "mailto:me@example.com" 
        "?cc=myCCaddress@example.com" +
        "&subject=" + escape("Birthday Info") +
        "&body=" + escape(document.getElementById('birthday-info').value);

    window.location.href = link;
}


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

/* var bdates = ['1956-12-03', '1990-03-09', '1970-02-14'];

var now = moment('2019-06-19');
var birthDates = [];

bdates.forEach(function(birthDate) {
  var birthDay = moment(birthDate).year(now.year());
  var birthDayNextYear = moment(birthDate).year(now.year() + 1);
  var daysRemaining = Math.min(Math.abs(birthDay.diff(now, 'days')), Math.abs(birthDayNextYear.diff(now, 'days')));
  
  if((daysRemaining >= 0) && (daysRemaining <= 7)) {
    birthDates.push(birthDate);
  }
});

console.log(JSON.stringify(birthDates));
console.log(moment().format('LLLL')); */