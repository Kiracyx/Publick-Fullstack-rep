let counterNumber = 0;

const counterDisplay = document.querySelector("#counterDisplay");

function displayNumber() {
  counterDisplay.textContent = counterNumber;
}

function incrementOne() {
  counterNumber++;
  displayNumber();

  counterDisplay.style.border = "3px solid green";
}

function decrementOne() {
  counterNumber--;
  displayNumber();

  counterDisplay.style.border = "3px solid red";
}

function incrementAny() {
  const anyNumber = Number(
    prompt("Put any number in a window below", "Type here")
  );
  counterNumber += anyNumber;
  displayNumber();
}

displayNumber();
