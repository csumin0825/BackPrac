const fs = require("fs");
// // let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// for (i = 0; i < input.length; i++) {
//   const n = input[i].split(" ");
//   const a = parseInt(n[0]);
//   const b = parseInt(n[1]);

//   console.log(a + b);
// }

// for (let i = 0; i < input.length; i++) {
//   let numbers = input[i].split(" ");

//   console.log(Number(numbers[0]) + Number(numbers[1]));
// }

let i = 0;
while (i < input.length - 1) {
  let nums = input[i].split(" ").map((x) => Number(x));

  a = nums[0];
  b = nums[1];

  console.log(a + b);
  i++;
}
