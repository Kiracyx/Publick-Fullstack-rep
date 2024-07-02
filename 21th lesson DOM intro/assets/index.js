/*
    InnerText vs textContent
    Choose - textContent
*/

// document.body.textContent = "test";

/* 
innerHTML
 */

// document.body.innerHTML = "<div>second test</div>";

/* 
getElementById()
 */

// const elem = document.getElementById("first");
// console.dir(elem)
// elem.innerHTML = "<input>";

/* 
getElementsByClassName()
 */

// const elem = document.getElementsByClassName("second");

// console.log(elem);

// const array = Array.from(elem);
// console.log(array);

/* 
querySelectorAll()
 */
const elem = document.querySelectorAll(".second");

