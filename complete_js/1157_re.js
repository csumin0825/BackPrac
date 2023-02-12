//백준 제출용
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const WORD = input[0].toUpperCase().split("");
let wordLst = [];

WORD.forEach((x) => {
  if (isNaN(Number(x))) {
    wordLst.push(x);
  }
});

let obj = {};

for (let i = 0; i < wordLst.length; i++) {
  if (obj[wordLst[i]] == undefined) {
    obj[wordLst[i]] = 1;
  } else {
    obj[wordLst[i]] += 1;
  }
}

console.log(maxCheck(obj));

function maxCheck(obj) {
  let cnt = 0;
  let max = "";
  for (ob in obj) {
    if (obj[ob] > cnt) {
      cnt = obj[ob];
      max = ob;
    } else if (obj[ob] === cnt) {
      max = "?";
    }
  }
  return max;
}
