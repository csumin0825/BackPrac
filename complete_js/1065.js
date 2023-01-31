//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const N = input[0];
let cnt = 0;

for (let i = 1; i <= N; i++) {
  let lst = i
    .toString()
    .split("")
    .map((x) => Number(x));
  cnt += sequence(lst);
}
console.log(cnt);

function sequence(lst) {
  if (lst.length < 3) return 1;
  let remainder = lst[0] - lst[1];
  for (let i = 2; i < lst.length; i++) {
    if (remainder != lst[i - 1] - lst[i]) {
      return 0;
    }
  }
  return 1;
}
