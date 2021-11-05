const toDoForm = document.querySelector(".to-do");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".to-do__list");

//입력과 삭제로 인해 toDos array는 지속적으로 변하기 때문에 let으로 변수 할당
let toDos = []; 
const TODOS_KEY = "todos";

//local storage에 stringify한 to-do 리스트 저장 
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//입력한 to-do list를 createElement로 html에 추가 
function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    const icon = document.createElement("i");
    li.appendChild(span); 
    span.innerText = newToDo.text;
    li.appendChild(button);
    button.setAttribute("class", "fa fa-trash");
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
}

//입력한 to-do list 항목들 처리(local storage에 저장/toDos array에 추가)
function handleToDoSubmit(event) {
    event.preventDefault();     
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);  
    paintToDo(newToDoObj);
    saveToDos();
}

//to-do list 항목들 삭제하는 button 추가
function deleteToDo(event) {
    const li = event.target.parentElement; //span과 button을 함께 지워야 하므로, 해당 부모인 li를 찾아서 제거
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// 1. local storage에서 얻은 항목들을 JSON.parse로 배열화한 뒤, paintToDo 함수로 구현
// 2. toDos를 배열화한 to-do list와 일치시켜서 local storage에 저장한 값 유지
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo);
}

const showToDo = document.querySelector(".fa-clipboard-list")
const toDoContainer = document.querySelector(".to-do__container")

function toggleToDo() {
    toDoContainer.classList.toggle("hidden");
}

showToDo.addEventListener("click", toggleToDo);