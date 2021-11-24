const clockDiv = document.querySelector("#clock h2");
const ampmDiv = document.querySelector("#clock h3");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    let ampm = ""

    console.log(hours%12);

    if(hours %12 == 0) {
        ampm = "AM";
    } else {
        ampm = "PM"
    }
    
    clockDiv.innerHTML = `${hours}:${minutes}`
    ampmDiv.innerHTML = ampm;

}
getClock();
setInterval(getClock, 1000);