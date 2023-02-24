//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n] = input.shift();
const targets = input.pop();
const [m] = input.pop();
let nums = input[0].sort((a, b) => a - b);

let answer = [];
targets.forEach((el) => {
  answer.push(binarySearch(nums, el));
});
console.log(answer.join("\n"));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  // console.log(start, end);

  while (start <= end) {
    let middle = parseInt((start + end) / 2);
    if (target < arr[middle]) end = middle - 1;
    else if (target > arr[middle]) start = middle + 1;
    else return 1;
  }
  return 0;
}
