const fs = require("fs/promises");
const { encode } = require("querystring");

// fs.mkdir(
//   "/Users/vkont/OneDrive/Рабочий стол/Learning/JS-Fullstack-repository/31th_lesson_Node.js_intro/tmp"
// ).then((err) => {
//   console.log("dir successfully");
// });

// fs.writeFile(
//   "/Users/vkont/OneDrive/Рабочий стол/Learning/JS-Fullstack-repository/31th_lesson_Node.js_intro/tmp/info.txt",
//   "'Hello world and Nodejs'"
// ).then((err) => {
//   console.log("file successfully");
// });

// fs.readFile(
//   "/Users/vkont/OneDrive/Рабочий стол/Learning/JS-Fullstack-repository/31th_lesson_Node.js_intro/Readme.md",
//   { encoding: "utf8" }
// ).then((file) => {
//   console.log(file);
// });

("First task");

// fs.writeFile(
//   "/Users/vkont/OneDrive/Рабочий стол/Learning/JS-Fullstack-repository/31th_lesson_Node.js_intro/tmp/helloFile.txt",
//   "'Hello from NodeJS'"
// ).then((err) => {
//   console.log("file successfully");
// });

fs.readFile(
  "/Users/vkont/OneDrive/Рабочий стол/Learning/JS-Fullstack-repository/31th_lesson_Node.js_intro/tmp/helloFile.txt",
  "utf8"
).then((file) => {
  console.log(file);
});
