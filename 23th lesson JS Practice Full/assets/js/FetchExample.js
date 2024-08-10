/* fetch("https://randomuser.me/api/").then((response) => {
  return response.json();
}); */

const array = [];

fetch("https://randomuser.me/api/?seed=random1&results=5")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    array.push(result);
  });

console.log(array);

const div = document.querySelector("#cards");
div.classList.add("wrapper");

const userCard = document.createElement("article");
div.appendChild(userCard);
userCard.classList.add("card");

for (let i = 0; i < array.length; i++) {
  const div1 = document.createElement("div");
  userCard.appendChild(div1);
  div1.classList.add("card");

  const { ...rest } = array[i];
  div1.textContent = { ...rest };
}
