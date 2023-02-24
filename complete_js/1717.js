//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const fs = require("fs");
// const { get } = require("http");
// let input = fs.readFileSync("example.txt").toString().split("\n");

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
  const [n, m] = input.shift().split(" ").map(Number);

  // console.log(n, m, input);

  let arr = new Array(n);
  for (let i = 0; i <= n; i++) {
    arr[i] = i;
  }
  // console.log(arr);

  for (let i = 0; i < m; i++) {
    let [ch, a, b] = input[i].split(" ").map(Number);
    // console.log(ch, a, b);

    if (ch === 0) {
      unionParent(arr, a, b);
    } else if (ch === 1) {
      console.log(findParent(arr, a, b));
    }
  }

  function getParent(arr, n) {
    if (arr[n] === n) return n;
    return (arr[n] = getParent(arr, arr[n]));
  }

  function unionParent(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);

    if (a < b) arr[b] = a;
    else arr[a] = b;
  }

  function findParent(arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);

    if (a === b) return "YES";
    else return "NO";
  }
}
