//ADMIN page

//SEND BIRTHDAY info
function sendBirthInfo() {
    var link = "mailto:me@example.com" + //admin-email
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




