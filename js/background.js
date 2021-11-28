// const images = ["1.jpg", "2.jpg"];

// const chosenImage = images[Math.floor(Math.random()*images.length)];

// let imageURL = null;
const NASA_API_KEY = "93vVaqb45raLaNdBk8fcHWbwGdVxTXkSCcuXpPfM";
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
fetch(BASE_URL)
.then(response => 
    response.json()
).then(data => {
    const imageURL = data.url
    //console.log(imageURL)
    document.documentElement.style.backgroundImage = `url(${imageURL})`
})

