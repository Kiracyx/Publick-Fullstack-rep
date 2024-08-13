const fs = require("fs/promises");

fs.mkdir("/Users/vkont/OneDrive/Рабочий стол/Learning/JS-Fullstack-repository/31th_lesson_Node.js_intro/tmp").then((err) => {
  console.log("dir successfully");
});

fs.writeFile(
  "/Users/vkont/OneDrive/Рабочий стол/Learning/JS-Fullstack-repository/31th_lesson_Node.js_intro/tmp/info.txt",
  "'Hello world and Nodejs'"
).then((err) => {
  console.log("file successfully");
});

fs.readFile(
  "/Users/vkont/OneDrive/Рабочий стол/Learning/JS-Fullstack-repository/31th_lesson_Node.js_intro/Readme.md"
).then((file) => {
  console.log("read successfully");
});
