//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let board = input.slice(1, N + 1);

const whiteBoard = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"];
const blackBoard = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"];

chess();

function chess() {
  let minLst = [];
  for (let i = 0; i + 7 < N; i++) {
    for (let j = 0; j + 7 < M; j++) {
      minLst.push(whiteColor(i, j));
      minLst.push(blackColor(i, j));
    }
  }
  console.log(Math.min(...minLst));
}

function whiteColor(a, b) {
  let cnt = 0;
  for (let i = a; i < a + 8; i++) {
    for (let j = b; j < b + 8; j++) {
      if (whiteBoard[i - a][j - b] !== board[i][j]) cnt++;
    }
  }
  return cnt;
}

function blackColor(a, b) {
  let cnt = 0;
  for (let i = a; i < a + 8; i++) {
    for (let j = b; j < b + 8; j++) {
      if (blackBoard[i - a][j - b] !== board[i][j]) cnt++;
    }
  }
  return cnt;
}
