// date and time
function showDateTime() {
    var now = new Date();
    var dateTime = document.createElement('p');
    dateTime.textContent = "Current date and time: " + now;
    document.body.appendChild(dateTime);
}

window.onload = showDateTime;

