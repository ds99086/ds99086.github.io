const API_KEY = "56ec5c4120df9ae4137d4f10ce6c9404";

//success call back. JS will give a geolocation position object as input parameter.

function onGeoSuccess(position) {
    const latitude = (position.coords.latitude);
    const longitude = (position.coords.longitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

    fetch(url).then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById("weather");
        const cityDiv = document.getElementById("city");
        const tempDiv = document.getElementById("temp");
        cityDiv.innerHTML = data.name;
        weatherDiv.innerHTML = data.weather[0].main;
        tempDiv.innerHTML= `${data.main.temp} °C`;
    });
}
//fail call back
function onGeoError() {
    alert("cannot find weather for you")
}

//get current position
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


//api.openweathermap.org/data/2.5/weather?lat={-36.896768}&lon={174.7812352}&appid={56ec5c4120df9ae4137d4f10ce6c9404}