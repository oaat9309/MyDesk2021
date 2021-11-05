// 이미지 파일명으로 이루어진 배열을 변수에 할당 //
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

// Math.random의 결과를 images 배열의 길이(index 길이)만큼 곱해주고, 이를 Math.floor로 내림 //
const chosenImage = images[Math.floor(Math.random()*images.length)];

// createElement를 위해 bgImage 변수 선언 후, 해당 변수의 src에 백틱으로 파일명 포함 //
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// bgImage 변수를 appendChild로 body에 추가 후, css 단에서의 수정을 위해 clssList로 class 부여 //
document.body.appendChild(bgImage);
bgImage.classList.add("bgImage");