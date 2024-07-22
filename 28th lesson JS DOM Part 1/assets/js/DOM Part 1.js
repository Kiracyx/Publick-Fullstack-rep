let counterNumber = 0;

const arrayImgs = [
  "https://static.vecteezy.com/system/resources/previews/024/495/391/non_2x/earth-day-and-world-environment-day-spring-beautiful-natural-verdant-green-forest-in-summer-generate-ai-free-photo.jpg",
  "https://t4.ftcdn.net/jpg/05/36/32/95/360_F_536329537_RblOApJIbTIPjNlROJrKKiJaFmceLJvZ.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlRTPdc07ablYm4x5aVRzRu6dLiJmuXcSMQ&s",
  "https://i.insider.com/5ab921ea095b1142028b45d8?width=800&format=jpeg&auto=webp",
  "https://thumbs.dreamstime.com/b/waterfall-rain-forest-16456620.jpg",
];

const counterDisplay = document.querySelector("#sliderImages");

const changeSlide = function (event) {
  console.log(event.target.id);
  counterNumber = Number(1);
};

counterDisplay.onclick = changeSlide;

const slide = function (slideIndex) {
  counterNumber = Number(slideIndex);
  displayNumber();
};

const circles = document.querySelector(".slides-circles");

let str = "";

for (let i = 0; i < arrayImgs.length; i++) {
  str += `<div class="circle" onclick="slide(${i})"></div>`;
}
circles.innerHTML = str;

function displayNumber(addClass) {
  let { classList } = counterDisplay;

  if (counterNumber === 0) {
    classList.remove("displayRed", "displayGreen");
  } else {
    if (addClass === "displayGreen") {
      classList.remove("displayRed");
      classList.add("displayGreen");
    } else {
      classList.remove("displayGreen");
      classList.add("displayRed");
    }
  }

  if (counterNumber < 0) {
    counterNumber = arrayImgs.length - 1;
  }

  const result = counterNumber % arrayImgs.length;
  counterDisplay.src = arrayImgs[result];
}

function incrementOne() {
  counterNumber++;

  displayNumber("displayGreen");
}

function decrementOne() {
  counterNumber--;

  displayNumber("displayRed");
}

function addUserNumber() {
  const addNum = prompt("Put your own number in the window below");

  counterNumber = Number(addNum);
  displayNumber();
}

displayNumber();
