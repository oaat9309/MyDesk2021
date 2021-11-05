// weather API 사이트에서 부여받은 API key //
const API_KEY = "ef15dd2143ee731fe7d9add51a8ef919";

// position 인자를 만들어서 coords의 속성(latitude, longitude)불러옴
// url단에, 위치 기반 날씨 API url을 완성할 수 있도록 선언한 변수들을 템플릿 리터럴로 표현 해줌
// fetch, then, json 활용
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather span:first-child");
        weather.innerText = `${data.name}, ${data.weather[0].main}, ${data.main.temp}℃`;
    });  
}

// 위치 정보 파악안될 때 띄울 alert 창 //
function onGeoError() {
    alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

