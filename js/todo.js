const toDoForm = document.querySelector("#todoform");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDoArray = [];
const TODOS_KEY = "todos";

//add new input into toDoArray & show it in the list then save to localstorage.
function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDoValue = toDoInput.value;
    const newToDoObj = {
        text: newToDoValue,
        id: Date.now()
    }
    toDoInput.value = "";
    toDoArray.push(newToDoObj);
    addToDo(newToDoObj);
    saveTodoArray();
    console.log(newToDoValue);
}

//check whether list id matches localStorage list id (make sure they are both numbers) and save filtered array.
function deleteToDo(event) {
    const li = event.target.parentElement;

    toDoArray = toDoArray.filter(toDo => 
        toDo.id !== parseInt(li.id)
        );
    saveTodoArray();
    console.log(toDoArray)
    li.remove();
}

function saveTodoArray() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

function addToDo(newToDoObj) {
    const newToDo = newToDoObj.text;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    li.id = newToDoObj.id;
    deleteBtn.innerHTML = "❌";
    deleteBtn.classList.add("deletebtn");
    deleteBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    span.innerHTML = newToDo;
    toDoList.appendChild(li); 
}

function showToDoList() {
    const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
    if (savedToDos !== null) {
        savedToDos.forEach(addToDo);
        toDoArray = savedToDos;
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);
window.addEventListener("load", showToDoList);

