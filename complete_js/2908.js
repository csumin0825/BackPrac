//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");

let firstNum = input[0].toString().split("");
let secondNum = input[1].toString().split("");

firstNum.reverse();
secondNum.reverse();

firstNum = firstNum.join("");
secondNum = secondNum.join("");

console.log(Math.max(firstNum, secondNum));
