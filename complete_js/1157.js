//백준 제출용
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const WORD = input[0].toUpperCase().split("");
let alpha = [];
let cnt = [];

for (let i = 0; i < WORD.length; i++) {
  if (alpha.includes(WORD[i])) {
    cnt[alpha.indexOf(WORD[i])] += 1;
  } else {
    alpha.push(WORD[i]);
    cnt.push(1);
  }
}

let set = new Set(cnt);

if (cnt.length == set.size) {
  console.log(alpha[cnt.indexOf(Math.max(...cnt))]);
} else {
  console.log("?");
}
