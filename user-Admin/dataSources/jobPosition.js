let jobPositionsData = [{
    "company": "Workable",
    "url": "http://workable.com/",
    "size": "10-50",
    "jobs": [{
            "position": "Marketing assistant",
            "department": "Marketing ",
            "description": "Compose and post online content on the company’s website and social media accounts",
            "type": "full-time",
            "posted": "01-07-2019",
            "theClosingDate": "15-07-2019",
            "location": "UK",
            "skills": ["Project management", "Creativity", "Stress management", "Public speaking"],
            "salaryRange": {
                "from": 60000,
                "to": 70000,
                "currency": "£"
            },
            "perks": ["free food", "gym membership"],
            "apply": "http://workable.com/jobs/marketing-assistant/apply"
        },
        {
            "position": "HR assistant",
            "department": "Human resources",
            "description": "Participating in recruitment efforts.Scheduling job interviews and assisting in interview process",
            "type": "full-time",
            "posted": "10-07-2019",
            "theClosingDate": "15-07-2019",
            "location": "UK",
            "skills": ["Ethics", "Conflict management", "Employment Law"],
            "salaryRange": {
                "from": 50000,
                "to": 60000,
                "currency": "£"
            },
            "perks": ["free food", "gym membership"],
            "apply": "http://workable.com/jobs/hr-assistant/apply"
        },
        {
            "position": "Finance referent",
            "department": "Finance",
            "description": "Directs preparation of annual operating and business fiscal plans (budgets).",
            "type": "part-time",
            "posted": "21-05-2019",
            "theClosingDate": "20-07-2019",
            "location": "UK",
            "skills": ["Аccounting", "Financial Management", "Audit"],
            "salaryRange": {
                "from": 20000,
                "to": 30000,
                "currency": "£"
            },
            "perks": ["free food", "gym membership"],
            "apply": "http://workable.com/jobs/finance-referent/apply"
        }
    ]
}]
jobPositionJSON = JSON.stringify(jobPositionsData);
localStorage.setItem("jobPositionsJSON", jobPositionJSON);

function loadData() {
    //Retrieving training data 
    dataText = localStorage.getItem("jobPositionsJSON");
    data = JSON.parse(dataText);

    if (data.length && data)
        jobPositions = data;
    console.log(jobPositions);

    displayJobPosition(jobPositions);
}

function displayJobPosition(jobPositions) {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    //console.log(today);
    console.log(jobPositions);


    let divJobPosition = document.getElementById('jobPosition-display');
    let textareaJobPosition = document.getElementById('jobPosition-info');
    let headingInfo = document.createElement('h5');
    divJobPosition.appendChild(headingInfo);

    for (let i in jobPositions) {
        jobPositions[i].jobs.forEach(job => {
            if (job.posted === today) {
                headingInfo.innerHTML = `★Open Internal Job Position:${job.position} in department:${job.department}.Application deadline: ${job.theClosingDate}.Inform colleagues`;
                textareaJobPosition.innerHTML = `We would like to inform you about a openning position  in the department ${job.department} to the position  of a ${job.position}.If you want to make a change in your workplace, apply...Have a nice day.Your Workable.......`
            } else {
                // headingInfo.style.display = "none";

            }
        })
    }
}

//SEND OPEN INTERNAL JOB POSITION mail
function sendInternalJobPositionInfo() {
    var link = "mailto:me@example.com" +
        "?cc=myCCaddress@example.com" +
        "&subject=" + escape("Open Internal Job Position Info") +
        "&body=" + escape(document.getElementById('jobPosition-info').value);

    window.location.href = link;
}

loadData()