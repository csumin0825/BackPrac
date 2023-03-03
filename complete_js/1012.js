//백준 제출용
// const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");

const t = Number(input.shift());
input = input.map((x) => x.split(" ").map(Number));
let arr;
let visited;
let m, n, k;
let cnt;

for (let i = 0; i < t; i++) {
  [m, n, k] = input.shift();
  // console.log(m, n, k);
  let inputArr = [];
  for (let j = 0; j < k; j++) {
    inputArr.push(input.shift());
  }
  // console.log(inputArr);

  arr = new Array(n);
  for (let j = 0; j < n; j++) {
    let miniArr = new Array(m).fill(0);
    arr[j] = miniArr;
  }
  visited = new Array(n);
  for (let j = 0; j < n; j++) {
    let miniArr = new Array(m).fill(0);
    visited[j] = miniArr;
  }

  inputArr.forEach((el) => {
    const [a, b] = el;
    arr[b][a] = 1;
  });
  // console.log(arr);
  cnt = 0;
  for (let j = 0; j < n; j++) {
    for (let h = 0; h < m; h++) {
      // console.log(arr[j][h], visited[j][h]);
      if (arr[j][h] === 1 && visited[j][h] === 0) {
        // console.log(j, h);
        cnt++;
        dfs(j, h); //dfs 시작 좌표 j,h
      }
    }
  }
  console.log(cnt);
}

function dfs(x, y) {
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; //상하좌우

  visited[x][y] = 1;
  for (let i = 0; i < 4; i++) {
    let moveX = x + dir[i][0];
    let moveY = y + dir[i][1];
    if (moveX < 0 || moveY < 0 || moveX >= n || moveY >= m) {
      continue;
    }
    if (arr[moveX][moveY] === 1 && visited[moveX][moveY] === 0) {
      // console.log(moveX, moveY, "DFS");
      dfs(moveX, moveY);
    }
  }
}
