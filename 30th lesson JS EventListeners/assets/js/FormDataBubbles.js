const regForm = document.getElementById("reg-form");

function submitRegForm(event) {
  console.dir(event.target);
  event.preventDefault();
  console.log(event.target.children);
}

regForm.addEventListener("submit", submitRegForm);

/* 
  advertisement (alert()) in 1 min after page loaded
 */

const adTimer = setTimeout(() => {
  alert("Advertisement");
}, 60 * 1000);

/*
  turn on chekbox input in 30 sec after page loaded
*/

const chekboxElem = document.querySelector('input[name="terms"]');

const checkTimer = function chek() {
  chekboxElem.checked = true;
};

setTimeout(chek, 30 * 1000);

let clock = 0;

const clockElem = document.createElement("div");

setInterval(() => {
  clock++;
  clockElem.textContent = `You were at this page ${clock} seconds`;
}, interval);

document.body.appendChild(clockElem);
