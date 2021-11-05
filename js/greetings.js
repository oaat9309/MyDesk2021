const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".login__greeting");
const logoutForm = document.querySelector(".logout-form");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// 1.submit의 기본 기능은 새로고침이기 때문에, preventDefault 추가 //
// 2. onLoginSubmit 함수가 실행되면, 기존 loginForm에 hidden class 추가해서 숨김 //
// 3. localStorage에 username을 key로 설정하여 loginInput의 입력값을 저장 //
// 4. 뒤에 입력할 paintGreeting 함수 실행 (인사말 띄우는 함수)
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting();
}

// 1. 미리 설정한 username key를 사용해 저장된 값 변수로 할당 //
// 2. greeting element에 미리 입력시켜 놓았던 "hidden" class 제거해서 나타냄 //
// 3. 백틱 활용해 인삿말 + username 구현 //
// 4. logout 버튼에 부여되었던 "hidden" class 제거 //
// 5. logoutForm 클릭하면 onLogoutSubmit 함수 실행되도록 입력 (로그 아웃하는 함수) //
function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}!`;
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.addEventListener("click", onLogoutSubmit);
}

// 1. localStorage에서 미리 설정해 둔 key로 저장된 데이터 삭제 //
// 2. window.location.reload()로 새로고침 //
function onLogoutSubmit(event) {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

// 1. 저장된 username 데이터를 savedUsername 변수에 할당 //
// 2. if문을 활용해 savedUsername이 없다면 loginForm의 "hidden" class 다시 없얨 //
// 3. 새롭게 로그인 해도 기능이 유지되게끔 submit 될 때 onLoginSubmit 함수 걸어줌 //
// 4. 만약 savedUsername이 local storage에 있다면 그대로 인삿말 띄움 //
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreeting();
}