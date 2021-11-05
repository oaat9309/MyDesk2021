// html 내 clock 부분 querySelector로 가져오기 //
const clock = document.querySelector("h2.clock__screen");
const dateToday = document.querySelector("h3.date__screen");



// new Date()는 현재 시간과 관련된 모든 정보를 가져옴(시, 분, 초, 월, 년 등...)
// 가져온 시간 정보를 date 변수에 할당
// 시, 분, 초, 년, 월, 일 변수를 개별적으로 선언한 뒤, 백틱을 활용해 innerText 적용
function getClock() {
    const date = new Date();
    const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const whichDay = date.getDay();
    const today = week[whichDay];
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    dateToday.innerText =`${year}년 ${month}월 ${day}일 ${today}`;
}

//단, 실시간으로 흘러가는 시간을 위해 함수를 작동 시키고 setInterval로 1000ms마다 작동하게 설정(1초)
getClock();
setInterval(getClock, 1000);