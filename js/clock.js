const clockDiv = document.querySelector("#clock h2");
const ampmDiv = document.querySelector("#clock h3");

function getClock() {
    const date = new Date();
    let hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    let ampm = ""

    //console.log(Math.floor(hours/12));

    if(Math.floor(hours/12) == 0) {
        ampm = "AM";
    } else {
        ampm = "PM"
    }
    hours = hours % 12;

    clockDiv.innerHTML = `${hours}:${minutes}`
    ampmDiv.innerHTML = ampm;

}
getClock();
setInterval(getClock, 1000);