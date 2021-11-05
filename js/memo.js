const canvas = document.querySelector(".jsCanvas");
const ctx = canvas.getContext("2d");

const colors = document.getElementsByClassName("jsColor");
const range = document.querySelector(".jsRange");

const mode = document.querySelector(".jsMode");

const saveBtn = document.querySelector(".jsSave");

const INITIAL_COLOR = "#2c2c2c";

canvas.width = document.getElementsByClassName("jsCanvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("jsCanvas")[0].offsetHeight;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;

let filling = false;

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveto(x, y);
    }
    else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function stopPainting(event) {
    painting = false;
}

function startPainting() {
    painting = true;
}

function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleJsMode(event) {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill"
    }
    else {
        filling = true;
        mode.innerText = "Paint"
    }
}

function handleCanvasClick(event) {
    if(filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

//우클릭 (contextmenu 방지하는 함수)
function handleCm(event) {
    event.preventDefault();
}

function handleSaveClick() {
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJs";
    link.click();
}

if(canvas) {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
        canvas.addEventListener("click", handleCanvasClick);
        canvas.addEventListener("contextmenu", handleCm)
}

Array.from(colors).forEach(color => color.addEventListener("click", changeColor));

if(range) {
    range.addEventListener("input", handleRangeChange);
}

if(mode) {
    mode.addEventListener("click", handleJsMode);
}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}

// 초기화 버튼
const showBtn = document.querySelector(".fa-palette");
const hideBtn = document.querySelector(".jsHide");
const memoContainer = document.querySelector(".memo__container");


// MyDesk 기능 수정을 위해 일시적으로 주석처리(notepad toggle button)
/* function showClick() {
    memoContainer.classList.toggle("hidden");
}

function hideClick() {
    memoContainer.classList.add("hidden");
}

showBtn.addEventListener("click", showClick);
hideBtn.addEventListener("click", hideClick); */