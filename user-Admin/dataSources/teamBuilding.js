let teamBuildingData = [{
        "theme": "Laser Tag",
        "dateОfRegistration": "28-06-2019",
        "entities": [{
            "start": "01-07-2019",
            "end": "15-07-2019",
            "location": "LaserTag Arena"
        }]

    },
    {
        "theme": " Create your own Team Building Activity",
        "entities": [{
            "dateОfRegistration": "27-11-2019",
            "start": "08-12-2019",
            "end": "15-12-2019",
            "location": "MeetingRoom num 3"
        }]

    },
    {
        "theme": "Cooking Class",
        "entities": [{
            "dateОfRegistration": "31-08-2019",
            "start": "03-09-2019",
            "end": "07-09-2019",
            "location": "Culinary Events in our kitchen"
        }]

    },
    {
        "theme": "Sport games",
        "entities": [{
            "dateОfRegistration": "20-11-2019",
            "start": "23-11-2019",
            "end": "27-11-2019",
            "location": "Pula,Croatia"
        }]

    },
    {
        "theme": "Go-Kart Racing",
        "entities": [{
            "dateОfRegistration": "21-05-2019",
            "start": "25-05-2019",
            "end": "30-05-2019",
            "location": "K1 Speed"
        }]

    },
    {
        "theme": "A photo challenge",
        "entities": [{
            "dateОfRegistration": "28-06-2019",
            "start": "04-07-2019",
            "end": "09-07-2019",
            "location": "Ohrid,Macedonia"
        }]

    }
]
teamBuildingJSON = JSON.stringify(teamBuildingData);
localStorage.setItem("teamBuildingsJSON",teamBuildingJSON);

function loadData() {
    //Retrieving training data 
    dataText = localStorage.getItem("teamBuildingsJSON");
    data = JSON.parse(dataText);

    if (data.length && data)
    teamBuildings = data;
    //console.log(teamBuildings);

    displayTeamBuilding(teamBuildings);
}

function displayTeamBuilding(teamBuildings) {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    //console.log(today);

    for (let i in teamBuildings) {

        let divTeamBuilding = document.getElementById('teamBuilding-display');
        let textareaTeamBuilding = document.getElementById('teamBuilding-info');
        let headingInfo = document.createElement('h5');
        divTeamBuilding.appendChild(headingInfo);

        teamBuildings[i].entities.forEach(entity => {
            if (entity.dateОfRegistration === today) {

                headingInfo.innerHTML = `★Upcomming Team Building about ${teamBuildings[i].theme} from ${entity.start} to ${entity.end}.Inform colleagues`;
                textareaTeamBuilding.innerHTML = `We would like to inform you about  a team Building  that will take place in ${entity.location} from ${entity.start} to ${entity.end}.We expect great fun.Have a nice day.Your Workable.......`;
            } else {
                headingInfo.style.display = "none";
            }           
        })
    }
}
//SEND TEAM BUILDING mail
function sendTemaBuildingInfo() {
    var link = "mailto:me@example.com" +
        "?cc=myCCaddress@example.com" +
        "&subject=" + escape("Team Building Info") +
        "&body=" + escape(document.getElementById('teamBuilding-info').value);

    window.location.href = link;
}
loadData()