// 객체로 이루어진 array 정의 //
const quizArray = [
    {
        quiz: "프레임워크란 무엇인가요?",
        category: "Framework"
    },
    {
        quiz: "MVC의 개념을 알고 있나요?",
        category: "Framework"
    },
    {
        quiz: "BEM의 개념을 알고 있나요?",
        category: "HTML/CSS"
    },
    {
        quiz: "SPA에 대해 설명할 수 있나요?",
        category: "CS"
    },
    {
        quiz: "TDD란 무엇인가요?",
        category: "CS"
    },
    {
        quiz: "CSR과 SSR의 개념을 알고 있나요?",
        category: "CS"
    },
    {
        quiz: "CI/CD에 대해 설명할 수 있나요?",
        category: "CS"
    },
    {
        quiz: "SEO의 개념을 알고 있나요?",
        category: "CS"
    },
    {
        quiz: "API에 대해 설명할 수 있나요?",
        category: "CS"
    },
    {
        quiz: "Scope의 개념을 알고 있나요?",
        category: "JavaScript"
    },
    {
        quiz: "Pseudo Selector를 알고 있나요?",
        category: "HTML/CSS"
    },
    {    
        quiz: "비동기 프로그램을 설명해보세요.",
        category: "CS"
    },
    {    
        quiz: "PWA의 개념을 알고 있나요?",
        category: "CS"
    },
    {
        quiz: "Restful API를 설명해보세요.",
        category: "CS"
    },
    {
        quiz: "프로토타입을 설명해보세요.",
        category: "Javascript"
    },
    {
        quiz: "웹 표준은 무엇을 의미하나요?",
        category: "HTML/CSS"
    },
    {
        quiz: "반응형 웹 개발을 설명해보세요.",
        category: "HTML/CSS"
    }
]


// 1. querySelector를 사용해 quiz 구문이 들어갈 span과 category span을 정의 //
// 2. 배경 이미지와 같은 방식으로 랜덤 추출 (array[n]의 형식으로 array 내 n번째 요소 가져올 수 있음) //
// 3. innerText 활용해서 quiz 구문과 category html에 삽입 // 
const quiz = document.querySelector(".quiz span:first-child");
const category = document.querySelector(".quiz span:last-child");

const randomQuiz = quizArray[Math.floor(Math.random()*quizArray.length)];

quiz.innerText = randomQuiz.quiz;
category.innerText = `#${randomQuiz.category}`;
