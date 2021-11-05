// modal 창 element, 여는 버튼, 닫는 버튼 각각 변수에 할당 //
const modal = document.querySelector('.modal');
const onBtn = document.querySelector('.modalBtn');
const offBtn = document.querySelector('.update-modal__close');

// "hidden" class 활용해서 modal 창 띄우는 함수 //
function modalOn() {
    modal.classList.remove("hidden");
}

// modal 창 닫는 함수 //
function modalOff() {
    modal.classList.add("hidden");
}

// click으로 함수 실행되게끔 addEventListner 입력 //
onBtn.addEventListener("click", modalOn);
offBtn.addEventListener("click", modalOff);




