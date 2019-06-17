let trainingsData = [{

        "theme": "Presentation skills",
        "intent": "Teamwork",
        "entities": [{
            "dateОfRegistration": "01-07-2019",
            "start": "08-07-2019",
            "end": "15-07-2019",
            "location": "Online Training"
        }]

    },
    {
        "theme": "Adaptability",
        "intent": "Effective communication",
        "entities": [{
            "dateОfRegistration": "27-07-2019",
            "start": "01-08-2019",
            "end": "07-08-2019",
            "location": "Hotel HolidayIn"
        }]

    },
    {
        "theme": "Group Training",
        "intent": "Time management",
        "entities": [{
            "dateОfRegistration": "31-01-2019",
            "start": "15-02-2019",
            "end": "16-02-2019",
            "location": "Мeeting room num.2"
        }]

    },
    {
        "theme": "Time Efective",
        "intent": "Problem-solving skills",
        "entities": [{
            "dateОfRegistration": "31-07-2019",
            "start": "08-08-2019",
            "end": "19-08-2019",
            "location": "Faculty of Economics"
        }]

    },
    {
        "theme": "Seminars",
        "intent": "Effective Executive Speaking",
        "entities": [{
            "dateОfRegistration": "20-06-2019",
            "start": "25-05-2019",
            "end": "28-05-2019",
            "location": "Belgrade,Serbia"
        }]

    },
    {
        "theme": " Workplace Ethics",
        "intent": "Team management",
        "entities": [{
            "dateОfRegistration": "15-08-2019",
            "start": "03-09-2019",
            "end": "14-09-2019",
            "location": "Online Training"
        }]

    }
]

trainingJSON = JSON.stringify(trainingsData);
localStorage.setItem("trainingsJSON", trainingJSON);

function loadData() {
    //Retrieving training data 
    dataText = localStorage.getItem("trainingsJSON");
    data = JSON.parse(dataText);

    if (data.length && data)
        trainings = data;
    //console.log(trainings);

    displayTraining(trainings);
}

function displayTraining(trainings) {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    //console.log(today);

    for (let i in trainings) {

        let divTraining = document.getElementById('training-display');
        let textareaTraining = document.getElementById('training-info');
        let headingInfo = document.createElement('h5');
        divTraining.appendChild(headingInfo);

        trainings[i].entities.forEach(entity => {
            if (entity.dateОfRegistration === today) {

                headingInfo.innerHTML = `★Upcomming training about ${trainings[i].intent} from ${entity.start} to ${entity.end}.Inform colleagues`;
                textareaTraining.innerHTML = `We would like to inform you about a training course that will take place in ${entity.location} about ${trainings[i].intent} from ${entity.start} to ${entity.end}.f you are interested, please confirm the mail in order to know the correct registration number.Thank you.Have a nice day.Your Workable....`
            } else {
                headingInfo.style.display = "none";

            }
        })
    }
}

//SEND TRAINING mail
function sendTrainingInfo() {
    var link = "mailto:me@example.com" +
        "?cc=myCCaddress@example.com" +
        "&subject=" + escape("Training info") +
        "&body=" + escape(document.getElementById('training-info').value);

    window.location.href = link;
}
loadData()