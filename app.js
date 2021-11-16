const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "myUserName";

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greetingDiv = document.querySelector("#greeting");
const greetingTxt = greetingDiv.querySelector("h1");
const savedUsername = localStorage.getItem(USERNAME_KEY);


//set a name to greeting and make it visible
function setGreeting(name) {
    greetingTxt.innerHTML = `Hello, ${name}!`;
    greetingDiv.classList.remove(HIDDEN_CLASSNAME);
}

//save username in local storage
function onLogInSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    setGreeting(username);
}

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    //show the greeting
    setGreeting(savedUsername);
}



loginForm.addEventListener("submit", onLogInSubmit);