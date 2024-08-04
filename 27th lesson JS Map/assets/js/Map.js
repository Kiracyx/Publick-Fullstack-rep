const map1 = new Map();

map1.set("userId", 1);
map1.set(undefined, "default");
map1.set("default", undefined);

console.log(map1);
console.log(map1.get("default"));
console.log(map1.get(undefined));
console.log(map1.has("userId"));

map1.set("userId", 2);

console.log(map1);
