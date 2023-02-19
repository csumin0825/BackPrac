//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");

const N = Number(input[0]);

let cnt = 0;
let result = [];

function hanoi(n, f, o, t) {
  if (!n) return;
  hanoi(n - 1, f, t, o);
  result.push(`${f} ${t}`);
  cnt++;
  hanoi(n - 1, o, f, t);
}

hanoi(N, 1, 2, 3);
console.log(cnt);
console.log(result.join("\n"));
