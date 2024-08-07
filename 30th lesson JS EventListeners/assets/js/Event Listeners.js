/* const test = document.querySelector("#test");

test.textContent = "!!! Click ME !!!";

test.onclick = function () {
  alert("Clicked by onclick prop");
};

function testOnClick() {
  alert("Clicked by 1st evenListener");
}

function testOnClick1() {
  console.log("Clicked by 2nd evenListener");
}

test.addEventListener("click", testOnClick);

test.addEventListener("click", testOnClick1);
 */

/* const divs = document.querySelectorAll(".my-class");

function divOnClick(event) {
  console.log(event.target);
  alert("Handled by divOnClick evenListener");
}

divs.forEach((elem) => {
  elem.textContent = "Click us!!!";
  elem.addEventListener("click", divOnClick);
}); */

const loginInput = document.querySelector('input[name = "login"]');

const passInput = document.querySelector('input[name = "password"]');

loginInput.addEventListener("change", function (event) {
  const regexLogin = /^\w{4,32}$/;
  if (regexLogin.test(event.target.value) === false) {
    alert("Incorrect login");
  }
});
