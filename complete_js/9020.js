//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n");

// let n = Number(input.shift());
// input = input.map(Number);
// let max = Math.max(...input);
// let arr = new Array(max + 1).fill(true);

// for (let i = 0; i < Math.sqrt(max); i++) {
//   if (i === 0 || i === 1) arr[i] = false;
//   if (!arr[i]) continue;
//   for (let j = 2; j * i < max; j++) {
//     arr[i * j] = false;
//   }
// }

// input.forEach((el) => {
//   console.log(gold(el).join(" "));
// });

// function gold(num) {
//   let result = [];

//   for (let i = 2; i < num; i++) {
//     if (arr[i]) {
//       if (arr[num - i]) {
//         result.push([i, num - i]);
//       }
//     }
//   }
//   result.sort((a, b) => Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]));
//   return result[0];
// }

/** require 사용 시 typeError
 *  readline 사용함
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  let n = Number(input.shift());
  input = input.map(Number);
  let max = Math.max(...input);
  let arr = new Array(max + 1).fill(true);

  for (let i = 0; i < Math.sqrt(max); i++) {
    if (i === 0 || i === 1) arr[i] = false;
    if (!arr[i]) continue;
    for (let j = 2; j * i < max; j++) {
      arr[i * j] = false;
    }
  }

  input.forEach((el) => {
    console.log(gold(el).join(" "));
  });

  function gold(num) {
    let result = [];

    for (let i = 2; i < num; i++) {
      if (arr[i]) {
        if (arr[num - i]) {
          result.push([i, num - i]);
        }
      }
    }
    result.sort((a, b) => Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]));
    return result[0];
  }
}
