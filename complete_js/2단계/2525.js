const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");

// let input = fs.readFileSync("input.txt").toString().split(" ");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// let input = fs.readFileSync("/dev/stdin").toString().split(" ");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const time = input[0].split(" ");

let hour = parseInt(time[0]);
let min = parseInt(time[1]);
const timer = parseInt(input[1]);

hour = hour + Math.floor(timer / 60);
min = min + (timer % 60);

if (min >= 60) {
  min -= 60;
  hour += 1;
}
if (hour >= 24) {
  hour -= 24;
}

console.log(hour);
console.log(min);
