const images = ["1.jpg", "2.jpg"];


const chosenImage = images[Math.floor(Math.random()*images.length)];

// const backgroundImg = document.createElement("img");
// //backgroundImg.src = `/img/${chosenImage}`;
// backgroundImg.id = "backgroundimage";

// document.body.appendChild(backgroundImg)

document.documentElement.style.backgroundImage = `url(/img/${chosenImage})`;