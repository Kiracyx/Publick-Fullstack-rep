"use strict";

const MyMath = require("./MyMath");
require("./fsinit");

/*
require work:
1 Resolve - поиск,
2 Read - чтение файла,
3 Wrap - обертка в функцию inject переменных,
4 Eval - запуск кода, поиск ошибок,
5 Cache - запоминание экспорта после eval.

Код при импорте запускается один раз
 */
/*
Resolve - поиск
1 Core modules - встроенные в node.js модули
(условие - без расширения файла, без "/" или "./" вначале),
2 File
(условие - с "/" или "./" вначале,
если без расширения - сначала поиск .js, потом .json),
3 Folder/Directory
(если в директории есть package.json - в нем поле "main",
иначе в директории index.js)
4 в папке node_modules/
 */
const math = new MyMath();

console.log(math);

console.log(math.sum(2, 2));

// for (let i = 0; i < 5; i++) {
//   console.log(Math.random());
// }
