//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const S = input[0].split("");
let alpha = [];
let cnt = [];

for (let i = 0; i < 26; i++) {
  alpha.push(String.fromCharCode(i + 97));
  cnt.push(-1);
}

S.forEach((x) => {
  if (S.indexOf(x) != -1) {
    cnt[alpha.indexOf(x)] = S.indexOf(x);
  }
});

console.log(cnt.join(" "));
