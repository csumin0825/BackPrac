//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const n = Number(input.shift());
const map = input.map((x) => x.split("").map(Number));

// console.log(map);

let visited = new Array(n);
for (let i = 0; i < n; i++) {
  visited[i] = new Array(n).fill(0);
}
// console.log(visited);

let totalCount = [];
let dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let cnt = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] === 0 && map[i][j] === 1) {
      // console.log(i, j);
      totalCount.push(dfs(i, j));
      cnt = 1;
    }
  }
}

totalCount.sort();
console.log(totalCount.length);
console.log(totalCount.join("\n"));

function dfs(x, y) {
  visited[x][y] = 1;

  for (let i = 0; i < 4; i++) {
    const xPos = x + dir[i][0];
    const yPos = y + dir[i][1];
    if (xPos >= 0 && yPos >= 0 && xPos < n && yPos < n) {
      let next = map[xPos][yPos];
      if (next === 1 && visited[xPos][yPos] === 0) {
        // console.log(xPos, yPos, "boom");
        cnt++;
        dfs(xPos, yPos);
      }
    }
  }
  return cnt;
}
