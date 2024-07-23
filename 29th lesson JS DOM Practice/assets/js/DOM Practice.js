const mainSection = document.querySelector("#main-section");

// '<div class="test-text"> second test </div>';
const testDiv = document.createElement("div");

mainSection.appendChild(testDiv);

testDiv.textContent = "Test Text";

testDiv.classList.add("test-div");

const navList = document.querySelector("#nav-wrapper");

// navList.innerHTML =
//   "<ul><li>List item</li><li>List item</li><li>List item</li></ul>";

// const liElem = document.querySelectorAll("li");

// console.log(liElem);

const ulElem = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const liElem = document.createElement("li");
  ulElem.appendChild(liElem);
  liElem.textContent = "List item";
  liElem.classList.add("li-elem");
}

navList.appendChild(ulElem);

const spanElem = document.createElement("span");

spanElem.textContent = "Span element";

spanElem.classList.add("span");

const theEndOfBodyTag = document.querySelector("body");

const divWrapper = document.createElement("div");

for (let i = 0; i < 3; i++) {
  const newDivElem = document.createElement("div");
  divWrapper.appendChild(newDivElem);
  newDivElem.textContent = "New div";
  newDivElem.classList.add(`#divElem_${i}`);
}
divWrapper.classList.add("footer");
theEndOfBodyTag.appendChild(spanElem);
theEndOfBodyTag.appendChild(divWrapper);
